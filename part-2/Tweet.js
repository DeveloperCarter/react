const Tweet = (props) => (
  <div>
    <p>
      <b>{props.name}</b>
    </p>
    <p>{props.username}</p>
    <p>{props.date}</p>
    <p>{props.message}</p>
  </div>
);
