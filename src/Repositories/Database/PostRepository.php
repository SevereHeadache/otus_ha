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

    public function getFeed(string $userId)
    {
        $query = 'SELECT t.id, t.text, t.author_user_id FROM (
            SELECT p.* FROM posts p
            INNER JOIN friends f ON f.friend_id = p.author_user_id AND f.user_id = ?
            ) t ORDER BY t.created_at DESC LIMIT 1000';
        $request = $this->getConnection()->prepare($query);
        $request->execute([$userId]);
        $posts = $request->fetchAll(\PDO::FETCH_CLASS, Post::class);
        $result = array_map([$this, 'parseValues'], $posts);

        return $result;
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