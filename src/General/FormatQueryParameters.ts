import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";

export const formatQueryParameters = (params: GetListBaseInput) => {

    let queryParams = [];
    let queryParamsString = '';

    if (params) {
        Object.keys(params).forEach((indexName: string): void => {
            if (indexName !== "pagination") {
                let param:any = params[indexName as keyof GetListBaseInput]
                if(param !== undefined && param !== null){
                    queryParams.push(`${indexName}=${encodeURIComponent(param)}`);
                }
            }
        });
    }

    if(params.pagination){
        if(params.pagination.index){
            Object.keys(params.pagination.index).forEach((indexName: string): void => {
                if(params.pagination?.index){
                    let param:any = params.pagination?.index[indexName as keyof GetListBaseInput["pagination"]]
                    queryParams.push(`ix_${indexName}=${encodeURIComponent(param)}`)
                }
            });
        }


        if(params.pagination.scanIndexForward){
            let param:any = params.pagination.scanIndexForward
            queryParams.push(`pag_pageNumber=${encodeURIComponent(param)}`);
        }

        if(params.pagination.pageNumber){
            let param:any = params.pagination.pageNumber
            queryParams.push(`pag_pageNumber=${encodeURIComponent(param)}`);
        }

        if(params.pagination.pageSize){
            let param:any = params.pagination.pageSize
            queryParams.push(`pag_pageSize=${encodeURIComponent(param)}`);
        }
    }
 
    queryParamsString = queryParams.join('&');
    return queryParamsString;
}

