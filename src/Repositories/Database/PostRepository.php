<?php

namespace SevereHeadache\OtusHa\Repositories\Database;

use SevereHeadache\OtusHa\Models\Post;

/**
 * Class for work with post repository.
 * 
 * @todo make interface repository
 */
class PostRepository extends AbstractRepository
{
    protected static $tableName = 'posts';
    protected static $idField = 'id';
    protected static $class = Post::class;

    public function store(Post $post): Post
    {
        return $this->storeModel($post);
    }

    public function get(string $id): Post
    {
        return parent::get($id);
    }

    public function find(array $where): ?Post
    {
        return parent::find($where);
    }

    public function delete(Post $post)
    {
        return parent::deleteModel($post);
    }

    protected function isExists(Post $post): bool
    {
        return $this->isExistsIntoDb($post);
    }

    protected function update(Post $post)
    {
        return $this->updateModel($post);
    }
}