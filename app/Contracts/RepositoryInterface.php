<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;

/**
 * Interface RepositoryInterface
 * @package App\Contracts
 */
interface RepositoryInterface
{

    /**
     * @param int $id
     * @return Model|null
     */
    public function get(int $id): ?Model;

    /**
     * @param array $data
     * @return Model|null
     */
    public function create(array $data): ?Model;

    /**
     * @param array $data
     * @param Model $model
     * @return Model
     */
    public function update(array $data, Model $model): Model;

    /**
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool;

}
