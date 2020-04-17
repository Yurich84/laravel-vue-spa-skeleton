import Brands       from "../../modules/brand/components/BrandList";
import EditBrand    from "../../modules/brand/components/EditBrand";
import NotFound     from "../../components/NotFound";

export const routes = [{
    path: '/:page?',
    name: 'brands_index',
    component: Brands,
},{
    path: '/brands/:id/edit',
    name: 'brands_edit',
    component: EditBrand,
},{
    path: '*',
    component: NotFound,
    name: 'not_found'
}];
