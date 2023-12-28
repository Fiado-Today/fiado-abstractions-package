import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";

export const formatQueryParameters = (params: GetListBaseInput) => {

    let queryParams = [];
    let queryParamsString = '';

    if (params) {
        Object.keys(params).forEach((indexName: string): void => {
            if (indexName !== "pagination") {
                queryParams.push(`${indexName}=${params[indexName as keyof GetListBaseInput]}`);
            }
        });
    }

    if(params.pagination){
        if(params.pagination.index){
            Object.keys(params.pagination.index).forEach((indexName: string): void => {
                console.log(indexName);
                if(params.pagination?.index){
                    queryParams.push(`ix_${indexName}=${params.pagination?.index[indexName as keyof GetListBaseInput["pagination"]]}`)
                }
            });
        }

        if(params.pagination.pageNumber){
            queryParams.push(`pag_pageNumber=${params.pagination.pageNumber}`);
        }

        if(params.pagination.pageSize){
            queryParams.push(`pag_pageSize=${params.pagination.pageSize}`);
        }
    }
 
    queryParamsString = queryParams.join('&');
    return queryParamsString;
}

