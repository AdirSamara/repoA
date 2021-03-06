import { VERSION } from "./version";
import { paginate } from "./paginate";
import { iterator } from "./iterator";
export { composePaginateRest } from "./compose-paginate";
export { isPaginatingEndpoint, paginatingEndpoints, } from "./paginating-endpoints";
/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */
export function paginateRest(octokit) {
    return {
        paginate: Object.assign(paginate.bind(null, octokit), {
            iterator: iterator.bind(null, octokit),
        }),
    };
}
paginateRest.VERSION = VERSION;
