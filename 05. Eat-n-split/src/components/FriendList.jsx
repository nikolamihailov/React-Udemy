import FriendItem from "./FriendItem";

export default function FriendList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((fr) => {
        return (
          <FriendItem
            key={fr.id}
            friend={fr}
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
