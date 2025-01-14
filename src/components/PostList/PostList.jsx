import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import l from "./PostList.module.css";
import { getPostsApi } from "../../utils/Api";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    getPostsApi().then((data) => {
      setPosts(data.posts);
      const allTags = data.posts.flatMap((post) => post.tags);
      const uniqueTags = [...new Set(allTags)];
      setTags(uniqueTags);
    });
  }, []);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  const handleClick = (e) => {
  const tag = e.target.getAttribute('dataId')
setSelectedTag(tag)
  }

  return (
    <div className={l.PostList}>
      <div className={l.tags} onClick={handleClick}>
        {tags.map((tag) => (
          <button
            dataId={tag}  
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={tag === selectedTag ? l.activeTag : ""}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className={l.posts}>
        {filteredPosts.map((post) => (
          <PostCard
            title={post.title}
            body={post.body}
            likes={post.reactions.likes}
            dislikes={post.reactions.dislikes}
            views={post.views}
            tags={post.tags}
            key={post.id}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
