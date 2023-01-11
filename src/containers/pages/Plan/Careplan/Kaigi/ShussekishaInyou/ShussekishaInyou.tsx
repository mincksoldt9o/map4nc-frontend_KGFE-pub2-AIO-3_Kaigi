import React, { useState } from 'react';
import Dialog from '@my/components/atomic/Dialog';
import Grid from '@material-ui/core/Grid';
import { DataGrid, DataGridColumn, EditableGridData, useEditableDataGrid, toDataGridIndexNumberArray } from '@my/components/molecules/DataGrid';
import { Button } from '@material-ui/core';
import Label from '@my/components/atomic/Label';
import RadioButton from '@my/components/atomic/RadioButton';
import GeneralIconButton from '@my/components/molecules/GeneralIconButton';
import { TextColumnFilter } from '@my/components/molecules/DataGrid/filters';
import { PastShussekisha } from 'maps4nc-frontend-web-api/dist/lib/model';
import { RootState, useTypedSelector } from '@my/stores';
import UseEffectAsync from '@my/utils/UseEffectAsync';
import screenIDs from '@my/screenIDs';
import useFetchPastShussikisha from '@my/action-hooks/plan/careplan/kaigi/useFetchPastShussikisha';
import useSetKind from '@my/action-hooks/plan/careplan/kaigi/useSetKind';
import { useDispatch } from 'react-redux';

// const fetchPastShussikisha = useFetchPastShussikisha(screenIDs.L1240_01.id); // GET

// // Get past shussikisha
// React. useEffect(
//   UseEffectAsync. make(async () => {
//     if (notLoaded) {
//       await fetchPastShussikisha(
//         selectedPlanKeikakushoKanri?.info?.riyoushaSeq || 0,
//       );
//     }
//   }),
//   [fetchPastShussikisha, selectedPlanKeikakushoKanri, riyoushaSeq, notLoaded]
// );

type Props = {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  riyoushaSeq: number;
};

// export type GridColumnData = EditableGridData & {
//   shozoku: string;
//   name: string;
// };

// define type of columns
// export type GridColumnData = EditableGridData & PastShussekisha;
export type GridColumnData = EditableGridData & PastShussekisha & { dataId: string};

const defaultSelectedRows = { '0': true };

function setIsDialogOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}

const ShussekishaInyou: React.FC<Props> = (props: Props) => {
  const { setIsDialogOpen, riyoushaSeq } = props;

  


  //TODO: using useTypedSelector to get data form RootState like in KaigiEditForm

  // const riyoushaKihon = useTypedSelector((state: RootState) => state.kaigi.riyoushaKihon);

  // const kaigiData = useTypedSelector((state: RootState) => state.kaigi.planServiseTantoushaKaigi);

  // console.log('kaigiData form KaigiEditForm: ', kaigiData);

  // const loadingStatus = useTypedSelector((state: RootState) => state.kaigi.loadingStatus);

  // // debug
  // const selectedPlanKeikakushoKanri = useTypedSelector((state: RootState) => state.careplanHeader.selectedPlanKeikakushoKanri);
  // console.log('selectedPlanKeikakushoKanri: ', selectedPlanKeikakushoKanri);
  // console.log(
  //   'RootState-careplanHeader: ',
  //   useTypedSelector((state: RootState) => state.careplanHeader)
  // );

  /** Processing when the close button is clicked DD*/
  const handleClickReturn = () => {
    console.log('close button pressed');
    setIsDialogOpen(false);
  };


  //## implement handleClickMove()
  // const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>({});

  // const handleRowSelection = (rowIds: string[]) => {
  //   setSelectedRows(
  //     rowIds.reduce((acc, rowId) => {
  //       acc[rowId] = true;
  //       return acc;
  //     }, {})
  //   );
  // };
  
  // const getSelectedRows = (): GridColumnData[] | null => {
  //   if (Object.keys(selectedRows).length === 0) {
  //     return null;
  //   }
  //   return kakoShussekishaData.filter(row => selectedRows[row.seq]);
  // };


  // const handleClickMove = () => {
  //   const selectedRows = getSelectedRows();
  //   if (!selectedRows) {
  //     return;
  //   }
  //   const rowsToAdd = selectedRows.filter(row => {
  //     return !rightGridData.some(existingRow => existingRow.name === row.name);
  //   });
  //   setRightGridData(prevData => prevData.concat(rowsToAdd));
  // };




//  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>({});
  // const handleRowSelection = (rowIds: string[]) => {
  //   setSelectedRows(
  //     rowIds.reduce((acc, rowId) => {
  //       acc[rowId] = true;
  //       return acc;
  //     }, {})
  //   );
  // };

  
  // const getSelectedRows = (): GridColumnData[] | null => {
  //   if (Object.keys(selectedRows).length === 0) {
  //     return null;
  //   }
  //   return kakoShussekishaData.filter(row => selectedRows[row.seq]);
  // };


// ## ------------------ data of both grids stuff -----



//## for RadioInputField processing 

 
  // define onClickXXX and handleClickXXX for RadioButton
  // const onClickKettei = () => {
  //   // When setting weekly or monthly frequency
  //   if (hiundoRadio === 'hindo1') {
  //     if (kaisuu.label && weeklyOrMonthly.label) {
  //       handleClickKettei(`${kaisuu.label}/${weeklyOrMonthly.label}`);
  //     }
  //   }
  //   // When setting daily or occasional
  //   if (hiundoRadio === 'hindo2') {
  //     if (everydayOrTekigi.label) {
  //       handleClickKettei(everydayOrTekigi.label);
  //     }
  //   }
  // };

  //TODO: load kakoShussekishaKindRadioOptions from API-04
  // define xxxRadioOptions
  const kakoShussekishaKindRadioOptions = [
    { id: 'kako-shussekisha-kind-riyousha', label: '選択利用者', value: '1' },
    { id: 'kako-shussekisha-kind-staff', label: 'ログインスタッフ', value: '2' },
  ];


  // using useState to update radio-value
  // have put this code above leftGrid data values for its default value base on this varible
  const [kakoShussekishaKindRadio, setKakoShussekishaKindRadio] = useState('1');

  /** Processing when the Decision button is clicked*/
  const handleClickDecision = () => {
    console.log('Decision button pressed');
    console.log('kakoShussekishaKindRadioOptions: ', kakoShussekishaKindRadioOptions);
    console.log('kakoShussekishaKindRadioOptions[0].value: ', kakoShussekishaKindRadioOptions[0].value);
    console.log('kakoShussekishaKindRadioOptions[1].value: ', kakoShussekishaKindRadioOptions[1].value);
    console.log('kakoShussekishaKindRadio: ', kakoShussekishaKindRadio);
    console.log('kakoShussekishaKindRadio 2: ', kakoShussekishaKindRadio);
    //console.log('which radio button checked?, debug before kakoShussekishaDataGridValues declaration: ', kakoShussekishaKindRadio); // not see effect => move to handleClickDecision
    //
    // Log the value of the selected radio button
    console.log('Selected radio button value: ', kakoShussekishaKindRadio);

    // Log the label of the selected radio button
    const selectedRadio = kakoShussekishaKindRadioOptions.find((radio) => radio.value === kakoShussekishaKindRadio);
    //console.log('Selected radio button label: ', selectedRadio.label);

    // Log the status of all radio buttons
    kakoShussekishaKindRadioOptions.forEach((radio) => {
      console.log(`Radio button ${radio.label} is checked: ${radio.value === kakoShussekishaKindRadio}`);
    });

    //setIsDialogOpen(false);
  };


  // move data stuff of both grid above handleClickMove stuff

  // for leftGrid: Columns vs Data vs Values

  const kakoShussekishaColumns: DataGridColumn<GridColumnData>[] = React.useMemo(
    (): DataGridColumn<GridColumnData>[] => [
      {
        Header: '所属(職種)',
        accessor: 'shozoku',
        Filter: TextColumnFilter,
        width: 1,
        // minWidth: 220,
        // maxWidth: 400,
      },
      {
        Header: '氏名',
        accessor: 'name',
        Filter: TextColumnFilter,
        width: 1,
        // minWidth: 220,
        // maxWidth: 400,
      },
    ],
    []
  );

  // ### using useState to prepare var-setVar-pairs for Data of both Grids : dynamically
  //const [kakoShussekishaData, setkakoShussekishaData] = React.useState<GridColumnData[]>();

  // ### or useMemo to return pre-defined object : statically
  // const kakoShussekishaData: GridColumnData[] = React.useMemo((): GridColumnData[] => {
  //   return [
  //     { shozoku: 'B訪問介護事業所', name: 'ヘルパー　太郎' },
  //     { shozoku: 'C福祉用具貸与事業所', name: '福祉用具　二郎' },
  //     { shozoku: 'A居宅介護支援事業所', name: 'ケアマネ　花子' },
  //     { shozoku: 'X病院', name: '医師　進' },
  //   ];
  // }, []);




  // let kakoShussekishaData: GridColumnData[] = React.useMemo((): GridColumnData[] => {
  //   return [
  //     {
  //       "shozoku": "shozoku1",
  //       "name": "name1"
  //     },
  //     {
  //       "shozoku": "shozoku2",
  //       "name": "name2"
  //     },
  //     {
  //       "shozoku": "shozoku3",
  //       "name": "name3"
  //     },
  //     {
  //       "shozoku": "shozoku4",
  //       "name": "name4"
  //     },
  //     {
  //       "shozoku": "shozoku5",
  //       "name": "name5"
  //     },
  //     {
  //       "shozoku": "shozoku6",
  //       "name": "name6"
  //     },
  //     {
  //       "shozoku": "shozoku7",
  //       "name": "name7"
  //     },
  //     {
  //       "shozoku": "shozoku8",
  //       "name": "name8"
  //     },
  //     {
  //       "shozoku": "shozoku9",
  //       "name": "name9"
  //     }
  //   ];
  // }, []);

  let kakoShussekishaData: GridColumnData[] = React.useMemo((): GridColumnData[] => {
    return [
      {
        "dataId": "1",
        "shozoku": "shozoku1",
        "name": "name1"
      },
      {
        "dataId": "2",
        "shozoku": "shozoku2",
        "name": "name2"
      },
      {
        "dataId": "3",
        "shozoku": "shozoku3",
        "name": "name3"
      },
      {
        "dataId": "4",
        "shozoku": "shozoku4",
        "name": "name4"
      },
      {
        "dataId": "5",
        "shozoku": "shozoku5",
        "name": "name5"
      },
      {
        "dataId": "6",
        "shozoku": "shozoku6",
        "name": "name6"
      },
      {
        "dataId": "7",
        "shozoku": "shozoku7",
        "name": "name7"
      },
      {
        "dataId": "8",
        "shozoku": "shozoku8",
        "name": "name8"
      },
      {
        "dataId": "9",
        "shozoku": "shozoku9",
        "name": "name9"
      },
    ];
}, []);

  console.log('kakoShussekishaKindRadio 4: ', kakoShussekishaKindRadio);


  const kakoShussekishaDataSelectUser: GridColumnData[] = React.useMemo((): GridColumnData[] => {
    return [
      {
        "dataId": "1",
        "shozoku": "shozoku1SelectUser",
        "name": "name1SelectUser"
      },
      {
        "dataId": "2",
        "shozoku": "shozoku2SelectUser",
        "name": "name2SelectUser"
      },
      {
        "dataId": "3",
        "shozoku": "shozoku3SelectUser",
        "name": "name3SelectUser"
      },
      {
        "dataId": "4",
        "shozoku": "shozoku4SelectUser",
        "name": "name4SelectUser"
      },
      {
        "dataId": "5",
        "shozoku": "shozoku5SelectUser",
        "name": "name5SelectUser"
      },
      {
        "dataId": "6",
        "shozoku": "shozoku6SelectUser",
        "name": "name6SelectUser"
      },
      {
        "dataId": "7",
        "shozoku": "shozoku7SelectUser",
        "name": "name7SelectUser"
      },
      {
        "dataId": "8",
        "shozoku": "shozoku8SelectUser",
        "name": "name8SelectUser"
      },
      {
        "dataId": "9",
        "shozoku": "shozoku9SelectUser",
        "name": "name9SelectUser"
      },
    ];
  }, []);

  

  const kakoShussekishaDataLoginStaff: GridColumnData[] = React.useMemo((): GridColumnData[] => {
    return [
      {
        "dataId": "1",
        "shozoku": "shozoku1LoginStaff",
        "name": "name1LoginStaff"
      },
      {
        "dataId": "2",
        "shozoku": "shozoku2LoginStaff",
        "name": "name2LoginStaff"
      },
      {
        "dataId": "3",
        "shozoku": "shozoku3LoginStaff",
        "name": "name3LoginStaff"
      },
      {
        "dataId": "4",
        "shozoku": "shozoku4LoginStaff",
        "name": "name4LoginStaff"
      },
      {
        "dataId": "5",
        "shozoku": "shozoku5LoginStaff",
        "name": "name5LoginStaff"
      },
      {
        "dataId": "6",
        "shozoku": "shozoku6LoginStaff",
        "name": "name6LoginStaff"
      },
      {
        "dataId": "7",
        "shozoku": "shozoku7LoginStaff",
        "name": "name7LoginStaff"
      },
      {
        "dataId": "8",
        "shozoku": "shozoku8LoginStaff",
        "name": "name8LoginStaff"
      },
      {
        "dataId": "9",
        "shozoku": "shozoku9LoginStaff",
        "name": "name9LoginStaff"
      },
    ];
  }, []);


// this assignment swith for defualt leftGrid based on RadioButton switch should in onChange handler of that Radio button  
  if (Number(kakoShussekishaKindRadio) === 1) {
    kakoShussekishaData = kakoShussekishaDataSelectUser;
  } else {
    kakoShussekishaData = kakoShussekishaDataLoginStaff;
  }
  
console.log('kakoShussekishaData: ', kakoShussekishaData);

  // console.log("which radio button checked?, debug before kakoShussekishaDataGridValues declaration: ", kakoShussekishaKindRadio); // not see effect => move to handleClickDecision
  console.log('kakoShussekishaKindRadio 3: ', kakoShussekishaKindRadio);

  const kakoShussekishaDataGridValues = useEditableDataGrid<GridColumnData>({
    defaultData: kakoShussekishaData,
    rowSelect: 'multiple',
  });

  const { selectedRows, onSelectedRowChange } = kakoShussekishaDataGridValues;
  console.log('seletedRows in ShussekishaInyou: ', selectedRows);
  //console.log('seletedRows in ShussekishaInyou: ', Object.keys(selectedRows));
console.log('seletedRows-GridIndex using toDataGridIndexNumberArray in ShussekishaInyou: ', toDataGridIndexNumberArray(selectedRows));
  //console.log('seletedRows.length in ShussekishaInyou: ', selectedRows.length);
  // console.log('seletedRows.length in ShussekishaInyou: ', selectedRows.get(row.dataId));



  // for rightGrid: Columns vs Data vs Values

  const inyouShussekishaColumns: DataGridColumn<GridColumnData>[] = React.useMemo(
    (): DataGridColumn<GridColumnData>[] => [
      {
        Header: '所属(職種)',
        accessor: 'shozoku',
        width: 1,
        // minWidth: 220,
        // maxWidth: 400,
      },
      {
        Header: '氏名',
        accessor: 'name',
        width: 1,
        // minWidth: 220,
        // maxWidth: 400,
      },
    ],
    []
  );

  // const inyouShussekishaData: GridColumnData[] = React.useMemo((): GridColumnData[] => {
  //   return [
  //     { shozoku: 'C福祉用具貸与事業所', name: '福祉用具　二郎' },
  //     { shozoku: 'X病院', name: '医師　進' },
  //     { shozoku: 'A居宅介護支援事業所', name: 'ケアマネ　花子' },
  //   ];
  // }, []);

  const inyouShussekishaData: GridColumnData[] = React.useMemo((): GridColumnData[] => {
    return [
      {
        "dataId": "1",
        "shozoku": "shozoku1SelectUser",
        "name": "name1SelectUser"
      },
      {
        "dataId": "2",
        "shozoku": "shozoku2SelectUser",
        "name": "name2SelectUser"
      },
	  {
        "dataId": "1",
        "shozoku": "shozoku1LoginStaff",
        "name": "name1LoginStaff"
      },
      {
        "dataId": "2",
        "shozoku": "shozoku2LoginStaff",
        "name": "name2LoginStaff"
      },
    ];
  }, []);


  const inyouShussekishaDataGridValues = useEditableDataGrid<GridColumnData>({
    defaultData: inyouShussekishaData,
    draggable: true,
  });

// ## ------------------ end of data of both grids stuff ----



// ## -------------------

  // 1. use useState to set a pair : selectedRows and setSelectedRows

  //@@
  // const [selectedRows, setSelectedRows] = useState<Map<string,boolean>>(new Map());
  //@@
  //const [kakoShussekishaDataLoginStaffData, setkakoShussekishaDataLoginStaffData] = useState(kakoShussekishaDataLoginStaff);

  // 2. implement handleRowSelection
  // loop through all rows => with each rowId return selectedRows.set(rowId, true)
  // setSelectedRows(new Map(selectedRows))
  
  //@@
  // const handleRowSelection = (rowIds: string[]) => {
  //   rowIds.forEach(rowId => selectedRows.set(rowId, true));
  //   setSelectedRows(new Map(selectedRows));
  // };
  //@@



// const getSelectedRows = (): GridColumnData[] | null => {
//   if (selectedRows.size === 0) {
//     return null;
//   }
//   return kakoShussekishaData.filter(row => selectedRows.get(row.seq) === true);
// };

// 3. implement getSelectedRows 
// if selectedRows is null => return null => do nothing 
// else : leftGrid DataGrid:  kakoShussekishaData filter only row which have row._id true in selectedRows


//@@ prepare dataId 

// const gridData: pastShussikishaListGridDataType[] = React.useMemo((): pastShussikishaListGridDataType[] => {
//   return pastShussikishaList.map((kakutei, index) => {
//     return {
//       dataId: `${index}`,
//       ...kakutei,
//     };
//   });
// }, [pastShussikishaList]);


//@@ 

// const getSelectedRows = (): GridColumnData[] | null => {
//   if (selectedRows.size === 0) {
//     return null;
//   }
//   return kakoShussekishaData.filter(row => selectedRows.get(row.dataId) === true);
//   return null;
// };

// const handleRowSelection = (rowIds: string[]) => {
//   rowIds.forEach(rowId => selectedRows.set(rowId, true));
//   setSelectedRows(new Map(selectedRows));
// };

//@@@
// const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
// const handleRowSelection = (rowIds: string[]) => {
//   console.log("handleRowSelection called");
//   setSelectedRowIds(rowIds);
// };

// const getSelectedRows = (): GridColumnData[] | null => {
//   console.log("getSelectedRows called");
//   if (selectedRowIds.length === 0) {
//     return null;
//   }
//   return kakoShussekishaData.filter(row => selectedRowIds.includes(row.dataId));
// };
//@@@

// 4. implement handleClickMove 
// init selectedRows from getSelectedRows()
// if nothing select => return 
// rowsToAdd = selectedRows.filder(row => {
//  turn !rightGridData.some( 
    // existingRow => existingRow.name === row.name
// );
//});




  // const handleClickMove = () => {
  //   const selectedRows = getSelectedRows();
  //   if (!selectedRows) {
  //     return;
  //   }
  //   const rowsToAdd = selectedRows.filter(row => {
  //     return !rightGridData.some(existingRow => existingRow.name === row.name);
  //   });
  //   setRightGridData(prevData => prevData.concat(rowsToAdd));
  // };

// ## -------------------------------------------

//@@@

// const getSelectedRows = (): GridColumnData[] | null => {
//   // if (selectedRows.size === 0) {
//   //   return null;
//   // }
//   // return kakoShussekishaData.filter(row => selectedRows.get(row.dataId) === true);
//   // return null;
// };


  // const getSelectedRows = (): GridColumnData[] | null => {
  //   if (Object.keys(selectedRows).length === 0) {
  //     return null;
  //   }
  //   return kakoShussekishaData.filter(row => selectedRows[row.dataId]);
  // };

  
  const getSelectedRows = (): GridColumnData[] | null => {
    const selectedRowsKeysArray = toDataGridIndexNumberArray(selectedRows);
    console.log('selectedRowsKeysArray : ',selectedRowsKeysArray);
    if (selectedRowsKeysArray.length === 0) {
      return null;
    }
    return kakoShussekishaData.filter(row => selectedRowsKeysArray[row.dataId]);
  };
  


const handleClickMove = () => {
   console.log("Move button is clicked");
// not need custom function getSelectedRows() any more 
//   const selectedRows = getSelectedRows();
//   console.log("selectedRows: ", selectedRows);


   if (!selectedRows) {
     return;
   }
  //  const rowsToAdd = selectedRows.filter(row => {
  //    return !kakoShussekishaDataLoginStaff.some(existingRow => existingRow.dataId === row.dataId);
  //  });
  //  setkakoShussekishaDataLoginStaffData((prevData: any[]) => prevData.concat(rowsToAdd));
};
//@@@



  // function handleClickMove() {
  //   // const filteredRows = filterRows();
  //   //const filteredRows: Array<{ occupation: string; familyName: string }> = filterRows();
  //   // setLeftGrid((prevLeftGrid) => prevLeftGrid.filter((row) => !filteredRows.includes(row)));
  //   // setRightGrid((prevRightGrid) => [
  //   //   ...prevRightGrid,
  //   //   ...filteredRows.map((row) => ({
  //   //     occupation: row.occupation,
  //   //     familyName: row.familyName,
  //   //   })),
  //   // ]);
  // }



  // use useMemo to auto update GridData for both leftGrid and rightGrid : PastShussekisha

  //   const ikkatsuPrintList = useTypedSelector((state: RootState) => state.kaigoPrint.ikkatsuPrintList);

  // const gridData: ColumnDataOffice[] = React.useMemo((): ColumnDataOffice[] => {
  //   return ikkatsuPrintList.map((od) => {
  //     return {
  //       ...od,
  //     };
  //   });
  // }, [ikkatsuPrintList]);

  //   const pastShussekishaArray = useTypedSelector(
  //   //(state: RootState) => state.kaigi.planServiseTantoushaKaigi.*
  // );

  // export default (app: Express) => {
  //   // for Kagi GET - POST - PUT
  //   Routes.L124002CareplanKaigiUpdateRoute.getCareplanOfficeServiceKindSeqRiyoushaSeqKaigiKeikakushoShubetsuKeikakushoSeq(app, (res, params) => {
  //     res.json(sampleDataGet);
  //   });
  //   Routes.L124001CareplanKaigiRegisterRoute.postCareplanOfficeServiceKindSeqRiyoushaSeqKaigiKeikakushoShubetsu(app, (res, params) => {
  //     res.json(sampleDataPost);
  //   });
  //   Routes.L124002CareplanKaigiUpdateRoute.putCareplanOfficeServiceKindSeqRiyoushaSeqKaigiKeikakushoShubetsuKeikakushoSeq(app, (res, params) => {
  //     res.status(200).send();
  //   });
  //   // for PastShussekisha GET
  //   Routes.L124004CareplanKaigiPastShussekishaListRoute.getCareplanKaigiPastShussekishaKind(app, (res, params) => {
  //     res.json(sampleDataGetPastShussekisha);
  //   });

  // };

  //## kaigi Store-Slcie: [[KGFE-action-proc-insight - RootState - KaigiStore-json-data RootStore-Slice MOC]]

  // kaigi: {
  //   planServiseTantoushaKaigi: {
  //     officeSeq: 1,
  //     officeServiceKindSeq: 1,
  //     riyoushaSeq: 1,
  //     keikakushoShubetsu: 'keikakushoShubetsu',
  //     keikakushoSeq: 1,
  //     kaisaiDate: 1670544000000,
  //     kaisaiBasho: 'kaisaiBasho',
  //     kaisaiJikan: 'kaisaiJikan',
  //     kaisaiKaisuu: 1,
  //     shozoku1: 'shozoku1',
  //     name1: 'name1',
  //     shozoku2: 'shozoku2',
  //     name2: 'name2',
  //     shozoku3: 'shozoku3',
  //     name3: 'name3',
  //     shozoku4: 'shozoku4',
  //     name4: 'name4',
  //     shozoku5: 'shozoku5',
  //     name5: 'name5',
  //     shozoku6: 'shozoku6',
  //     name6: 'name6',
  //     shozoku7: 'shozoku7',
  //     name7: 'name7',
  //     shozoku8: 'shozoku8',
  //     name8: 'name8',
  //     shozoku9: 'shozoku9',
  //     name9: 'name9',
  //     shussekiHonnin: 'shussekiHonnin',
  //     shussekiKazoku: 'shussekiKazoku',
  //     shussekiTsuzukigara: 'shussekiTsuzukigara',
  //     shussekiBikou: 'shussekiBikou',
  //     kentouKoumoku: 'kentouKoumoku',
  //     kentouNaiyou: 'kentouNaiyou',
  //     ketsuron: 'ketsuron',
  //     kadai: 'kadai',
  //     updateAt: 1673141300389
  //   },
  //   youkaigodoList: [],
  //   loadingStatus: 'Loaded',
  //   loadingRiyoushaKihonStatus: 'NotLoad',
  //   loadingYoukaigodoListStatus: 'NotLoad',
  //   isDirty: false
  // },

  // const gridData: GridColumnData[] = React.useMemo((): GridColumnData[] => {
  //   return ikkatsuPrintList.map((od) => {
  //     return {
  //       ...od,
  //     };
  //   });
  // }, [ikkatsuPrintList]);

  //

  

  //## handlers
  //### 1.3 for rightGrid: handleClickDelete
  const { remove } = inyouShussekishaDataGridValues;

  const handleClickDelete = React.useCallback(
    (rowIndex: number) => {
      remove(rowIndex);
      console.log('kakoShussekishaDataGridValues: ', kakoShussekishaDataGridValues);
      console.log('inyouShussekishaDataGridValues: ', inyouShussekishaDataGridValues);
      console.log('kakoShussekishaData: ', kakoShussekishaData);
      console.log('inyouShussekishaData: ', inyouShussekishaData);
    },
    [remove]
  );

 
  // handleClickDecision implementation
  const DialogActions = (
    <GeneralIconButton icon="register" id="save-button" onClick={handleClickDecision}>
      決定
    </GeneralIconButton>
  );

//--
  //TODO : add "kind" variable to kaigiStore , 
  // - then using useTypedSelector-hook to get this data, 
  // - and using an using action-hook to set this data, sync from RadioButtonField
  // - "kind" variable only have 2 values : 1 or 2; defualt is 1.
  // - if kind === 1 => do user things
  // - if kind === 2 => do staff things
  // - this "kind" variable later can pass from KaigiEditForm to KaigiInputForm to PastShessukisha through props

// const fetchPastShussikisha = useFetchPastShussikisha(screenIDs.L1240_01.id); // GET

// // Get past shussikisha
// React. useEffect(
//   UseEffectAsync. make(async () => {
//     if (notLoaded) {
//       await fetchPastShussikisha(
//         selectedPlanKeikakushoKanri?.info?.riyoushaSeq || 0,
//       );
//     }
//   }),
//   [fetchPastShussikisha, selectedPlanKeikakushoKanri, riyoushaSeq, notLoaded]
// );


const fetchPastShussikisha = useFetchPastShussikisha(screenIDs.L1240_01.id); // GET
const selectedPlanKeikakushoKanri = useTypedSelector((state: RootState) => state.careplanHeader.selectedPlanKeikakushoKanri);

// fixed notLoaded not defined : from KaigiEditForm
  const loadingPastShussikishaStatus = useTypedSelector((state: RootState) => state.kaigi.loadingShusseskishaListStatus);
  const notLoadedPastShussikishaList = loadingPastShussikishaStatus !== 'Loaded';

// mock:  set kind static-data for mocking data
// const kind = 1;

  // get kind dynamic-data from KaigiStore
  const kind = useTypedSelector(
    (state: RootState) => state.kaigi.kind
  );
  console.log("kind from KaigiEditForm.tsx :", kind)
  
  

    // Get past shussikisha 
    React. useEffect(
      UseEffectAsync. make(async () => {
        if (notLoadedPastShussikishaList) {
          await fetchPastShussikisha(
            selectedPlanKeikakushoKanri?.info?.riyoushaSeq || 0,
            kind
          );
        }
      }),
      [fetchPastShussikisha, selectedPlanKeikakushoKanri, riyoushaSeq, kind, notLoadedPastShussikishaList]
    );


//debug 
console.log("kind data from ShussekishaInyou: ", kind);
console.log("riyoushaSeq data from ShussekishaInyou: ", riyoushaSeq);

  //---



  //  // Get key points
  //  React. useEffect(
  //   UseEffectAsync. make(async () => {
  //     if (notLoaded) {
  //       await useFetchPastShussikisha(
  //         // selectedPlanKeikakushoKanri?.info?.riyoushaSeq || 0,
  //         // kind
  //       );
  //     }
  //   }),
  //   [fetchKaigi, selectedPlanKeikakushoKanri, riyoushaSeq, notLoaded]
  // );

// const putKaigi = usePutKaigi(screenIDs.L1240_01.id); // UPDATE = GET + PUT
    
//     // await putKaigi(officeServiceKindSeq, riyoushaSeq, keikakushoShubetsu, keikakushoSeq, registerData);
//     await putKaigi(officeServiceKindSeq, riyoushaSeq, keikakushoShubetsu, keikakushoSeq, registerData);


//## TODO use action-hook to set kind value in Kaigi store 
// - [x] 1, write aciton-hook : useSetKind
// - 2, using action-hook in hear


//const dispatch = useDispatch();
//setKind(10);
//dispatch(setKind(10));
// fetchedPastShussekishaList
// SetKind: (draftState: KaigiState, action: PayloadAction<number>) => {
//   draftState.loadingStatus = 'Loaded';
//   draftState.kind = action.payload;
// },
// dispatch(SetKind(action.payload));

// const setKind = useSetKind(kind);
// // setKind(10);
// console.log("setKind: ", setKind);


const setKind = useSetKind(10);
// setKind(10);
//setKind;
console.log("setKind: ", setKind); // why undefined? because this is a return of useSetKind(10) is void => not a value






  return (
    <Dialog open variant="simple" title="出席者引用" onClickReturn={handleClickReturn} fullWidth maxWidth="lg" actions={DialogActions}>
      <Label id="tyushaku">選択利用者・ログインスタッフ単位で過去に入力した出席者から引用が行えます。</Label>
      <Grid container justify="flex-start" direction="row" xs={5}>
        <Grid item>
          <RadioButton
            id="kako-shussekisha-kind"
            name="kakoShussekishaKind"
            value={kakoShussekishaKindRadio}
            radios={kakoShussekishaKindRadioOptions}
            onChange={(value) => setKakoShussekishaKindRadio(value)}
            defaultValue="1"
          />
        </Grid>
      </Grid>
      <Grid container justify="flex-start" alignItems="center" direction="row" xs={12}>
        <Grid item xs={5}>
          <DataGrid id="kako-shussekisha-data-grid" columns={kakoShussekishaColumns} {...kakoShussekishaDataGridValues} minHeight={400} />
        </Grid>
        <Grid item xs={1}>
          <Grid container justify="center" direction="row">
            <Grid item>
              <Button id="move-button" variant="outlined" size="large" onClick={handleClickMove}>
                →
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <DataGrid id="inyou-shussekisha-data-grid" columns={inyouShussekishaColumns} onClickDelete={handleClickDelete} {...inyouShussekishaDataGridValues} minHeight={400} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ShussekishaInyou;
