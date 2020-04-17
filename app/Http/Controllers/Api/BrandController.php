<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BrandRequest;
use App\Http\Resources\BrandResource;
use App\Models\Brand;
use Illuminate\Database\Eloquent\Builder;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BrandController extends Controller
{
    /**
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $sort_field = $request->get('sort_field', 'id');
        $direction = $request->get('sort_direction', 'asc');

        return BrandResource::collection(
            Brand::query()
                ->when($request->filled('filter_group'), function (Builder $q) use($request) {
                    $q->where('group', (int) $request->filter_group);
                })
                ->when($request->filled('filter_select') && $request->filter_select, function (Builder $q) use($request) {
                    $q->where('select', 1);
                })
                ->orderBy($sort_field, $direction)->paginate()
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param BrandRequest $request
     * @return BrandResource
     */
    public function store(BrandRequest $request)
    {
        $data = $request->validated();
        $brand = new Brand($data);
        $brand->save();
        return new BrandResource($brand);
    }

    /**
     * Display the specified resource.
     *
     * @param Brand $brand
     * @return BrandResource
     */
    public function show(Brand $brand)
    {
        return new BrandResource($brand);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param BrandRequest $request
     * @param Brand $brand
     * @return BrandResource
     */
    public function update(BrandRequest $request, Brand $brand)
    {
        $brand->fill($request->validated());
        $brand->save();
        return new BrandResource($brand);
    }

    /**
     * @param Brand $brand
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(Brand $brand)
    {
        $brand->delete();
        return response()->json([
            'type' => 'access',
            'message' => 'Deleted'
        ]);
    }

}
