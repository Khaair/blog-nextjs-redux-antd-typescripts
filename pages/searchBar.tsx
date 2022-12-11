import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { fetchComments } from "../state-management/actions/comments";
import { fetchUsers } from "../state-management/actions/users";
import { fetchPosts } from "../state-management/actions/posts";
import PostCard from "./postCard";

function SearchBar({
  posts,
  postsInfo,
  comments,
  commentInfo,
  users,
  userInfo,
}: any) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  console.log(filteredData, "search");

  // dispatch post and comments
  useEffect(() => {
    posts();
    comments();
    users();
  }, [posts, comments, users]);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = postsInfo?.postsData?.filter((value: any) => {
      return value?.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div className="inputsearch-area">
        <input
          type="text"
          className="inputsearch"
          placeholder="Search post here.."
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>

      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((item, index) => {
            return (
              <>
                <div key={index} className="searchres">
                  <h3>{item?.title} </h3>
                  <p>{item?.body}</p>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state: { posts: any; comments: any; users: any }) => {
  return {
    postsInfo: state?.posts,
    commentInfo: state?.comments,
    userInfo: state?.users,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    posts: () => dispatch(fetchPosts()),
    comments: () => dispatch(fetchComments()),
    users: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
