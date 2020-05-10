<?php

namespace App\Modules\Tag\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Tag\Requests\TagRequest;
use App\Models\Tag;
use App\Modules\Tag\Resources\TagResource;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TagController extends Controller
{
    /**
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        [$column, $order] = explode(',', $request->input('sortBy', 'id,asc'));
        $pageSize = (int) $request->input('pageSize', 10);

        $resource = Tag::query()
            ->when($request->filled('search'), function (Builder $q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%');
            })
            ->orderBy($column, $order)->paginate($pageSize);

        return TagResource::collection($resource);
    }

    /**
     * Store a newly created resource in storage.
     * @param TagRequest $request
     * @return JsonResponse
     */
    public function store(TagRequest $request)
    {
        $data = $request->validated();
        $tag = new Tag($data);
        $tag->save();
        return response()->json([
            'type' => self::RESPONSE_TYPE_SUCCESS,
            'message' => 'Successfully created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Tag $tag
     * @return TagResource
     */
    public function show(Tag $tag)
    {
        return new TagResource($tag);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TagRequest $request
     * @param Tag $tag
     * @return JsonResponse
     */
    public function update(TagRequest $request, Tag $tag)
    {
        $data = $request->validated();
        $tag->fill($data)->save();
        return response()->json([
            'type' => self::RESPONSE_TYPE_SUCCESS,
            'message' => 'Successfully updated'
        ]);
    }

    /**
     * @param Tag $tag
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
        return response()->json([
            'type' => self::RESPONSE_TYPE_SUCCESS,
            'message' => 'Successfully deleted'
        ]);
    }

}
