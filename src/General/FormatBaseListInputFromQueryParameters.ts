
export const formatBaseListInputFromQueryParameters = (queryParams: any) => {


    //Get queryparams that start with ix_
    let indexParams = Object.keys(queryParams).filter((key) => key.startsWith('ix_'));
    //Get queryparams that start with pag_
    let paginationParams = Object.keys(queryParams).filter((key) => key.startsWith('pag_'));

    //Get queryparams that not start with ix_ or pag_
    let qParams = Object.keys(queryParams).filter((key) => !key.startsWith('ix_') && !key.startsWith('pag_'));

    //Remove ix_ and pag_ from queryparams
    indexParams = indexParams.map((key) => key.replace('ix_', ''));
    paginationParams = paginationParams.map((key) => key.replace('pag_', ''));

    //Create object with indexParams
    let indexParamsObject: any = {};

    qParams.forEach((key) => {
        indexParamsObject[key] = queryParams[key];
    });

    if(indexParams.length > 0){
        indexParamsObject.pagination = {};
        indexParamsObject.pagination.index = {};
        
        indexParams.forEach((key) => {
            if(key === 'required'){
                indexParamsObject.pagination.index[key] = queryParams['ix_' + key].split(',');
            }else{
                indexParamsObject.pagination.index[key] = queryParams['ix_' + key];
            }
        }
        );
        console.log(indexParamsObject);
    }

    if(paginationParams.length > 0){
        if(!indexParamsObject.pagination){
            indexParamsObject.pagination = {};
        }
        paginationParams.forEach((key) => {
            if(key === 'pageSize'){
                indexParamsObject.pagination[key] = parseInt(queryParams['pag_' + key]);
            }else{
                indexParamsObject.pagination[key] = queryParams['pag_' + key];
            }
            
        });
    }
    
    console.log(indexParamsObject);
    return indexParamsObject;
}

