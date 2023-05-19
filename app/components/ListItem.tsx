// import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, description } = post;
  //   const formattedDate = getFormattedDate(date);
  return (
    <div>
      <li>
        <Link href={`/posts/${id}`}>{title}</Link>
        <div>{post.description}</div>
        <br />
        {/* <p>{formattedDate}</p> */}
      </li>
    </div>
  );
}
