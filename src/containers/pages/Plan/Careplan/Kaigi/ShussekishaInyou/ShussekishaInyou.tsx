import React, { useState } from 'react';
import Dialog from '@my/components/atomic/Dialog';
import Grid from '@material-ui/core/Grid';
import { DataGrid, DataGridColumn, EditableGridData, useEditableDataGrid } from '@my/components/molecules/DataGrid';
import { Button } from '@material-ui/core';
import Label from '@my/components/atomic/Label';
import RadioButton from '@my/components/atomic/RadioButton';
import GeneralIconButton from '@my/components/molecules/GeneralIconButton';
import { TextColumnFilter } from '@my/components/molecules/DataGrid/filters';
import { PastShussekisha } from 'maps4nc-frontend-web-api/dist/lib/model';
import { RootState, useTypedSelector } from '@my/stores';

type Props = {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// export type GridColumnData = EditableGridData & {
//   shozoku: string;
//   name: string;
// };

// define type of columns 
export type GridColumnData = EditableGridData & PastShussekisha;


const defaultSelectedRows = { '0': true };


function setIsDialogOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}


const ShussekishaInyou: React.FC<Props> = (props: Props) => {
  const { setIsDialogOpen } = props;

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

    /** Processing when the OK button is clicked DD*/
    const handleClickDecision = () => {
      console.log('Confirm button pressed');
      setIsDialogOpen(false);
    };

  function handleClickMove() {
    // const filteredRows = filterRows();
    //const filteredRows: Array<{ occupation: string; familyName: string }> = filterRows();
    // setLeftGrid((prevLeftGrid) => prevLeftGrid.filter((row) => !filteredRows.includes(row)));
    // setRightGrid((prevRightGrid) => [
    //   ...prevRightGrid,
    //   ...filteredRows.map((row) => ({
    //     occupation: row.occupation,
    //     familyName: row.familyName,
    //   })),
    // ]);
  }

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
const kakoShussekishaData: GridColumnData[] = React.useMemo((): GridColumnData[] => {
    return [
      { shozoku: 'B訪問介護事業所', name: 'ヘルパー　太郎' },
      { shozoku: 'C福祉用具貸与事業所', name: '福祉用具　二郎' },
      { shozoku: 'A居宅介護支援事業所', name: 'ケアマネ　花子' },
      { shozoku: 'X病院', name: '医師　進' },
    ];
  }, []);

  const kakoShussekishaDataGridValues = useEditableDataGrid<GridColumnData>({
    defaultData: kakoShussekishaData,
    rowSelect: 'multiple',
  });


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


  const inyouShussekishaData: GridColumnData[] = React.useMemo((): GridColumnData[] => {
    return [
      { shozoku: 'C福祉用具貸与事業所', name: '福祉用具　二郎' },
      { shozoku: 'X病院', name: '医師　進' },
      { shozoku: 'A居宅介護支援事業所', name: 'ケアマネ　花子' },
    ];
  }, []);

  const inyouShussekishaDataGridValues = useEditableDataGrid<GridColumnData>({
    defaultData: inyouShussekishaData,
    draggable: true,
  });

//## handlers 
//### 1.3 for rightGrid: handleClickDelete
  const { remove } = inyouShussekishaDataGridValues;

  const handleClickDelete = React.useCallback(
    (rowIndex: number) => {
      remove(rowIndex);
      console.log("kakoShussekishaDataGridValues: ",kakoShussekishaDataGridValues);
      console.log("inyouShussekishaDataGridValues: ",inyouShussekishaDataGridValues);
      console.log("kakoShussekishaData: ",kakoShussekishaData);
      console.log("inyouShussekishaData: ",inyouShussekishaData);
    },
    [remove]
  );






// handleClickDecision implementation
  const DialogActions = (
    <GeneralIconButton icon="register" id="save-button" onClick={handleClickDecision}>
      決定
    </GeneralIconButton>
  );

  return (
    <Dialog open variant="simple" title="出席者引用" onClickReturn={handleClickReturn} fullWidth maxWidth="lg" actions={DialogActions}>
      <Label id="tyushaku">選択利用者・ログインスタッフ単位で過去に入力した出席者から引用が行えます。</Label>
      <Grid container justify="flex-start" direction="row" xs={5}>
        <Grid item>
          <RadioButton
            id="kako-shussekisha-kind"
            name="kakoShussekishaKind"
            radios={[
              { id: 'kako-shussekisha-kind-riyousha', label: '選択利用者', value: '1' },
              { id: 'kako-shussekisha-kind-staff', label: 'ログインスタッフ', value: '2' },
            ]}
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
