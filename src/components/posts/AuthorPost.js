export const AuthorPosts = ({ author, users, setAuthorId }) => {

  return (
    <>
      <fieldset>
        <select
          className="authorDropdown"
          name="userId"
          value={author}
          onChange={setAuthorId}
        >
          <option name="dropdownCategory" value="0">
            Author...
          </option>
          {users?.map((user, index) => {
            return (
              <option key={index} name="userId" value={user.id}>
                {user.username}

              </option>
            );
          })}
        </select>
      </fieldset>
    </>
  )
}