import { client } from "../lib/contentful";

type Props = {};

export default async function Page({}: Props) {
  const blogs = await client.getEntries({ content_type: "blog" });
  blogs.items.map((_: any) => {
    console.log(_.fields);
    console.log(_.fields.content.content[0].content[0].value);
  });

  return (
    <div className="max-w-screen-md m-auto mt-5">
      {blogs.items.map((blog: any, key: number) => (
        <div
          key={key}
          className="text-3xl font-bold text-center text-black dark:text-white"
        >
          <div className="text-3xl font-bold">{blog.fields.title}</div>
          {blog.fields.content.content.map((blogItem: any, key2: number) => {
            return (
              <div key={key2} className="text-3xl font-bold">
                {blogItem.content[0].value}
              </div>
            );
          })}
          <div className="text-xl font-bold">
            <span>Latitude: {blog.fields.location.lat}</span>
            <br />
            <span>Longtitude: {blog.fields.location.lon}</span>
          </div>
        </div>
      ))}
    </div>
  );

  // return <div>Page</div>;
}
