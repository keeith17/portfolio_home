import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
    const res = await fetch(
        `https://portfolio-home-gabin.vercel.app/api/posts/${id}`,
        {
            next: { revalidate: 5 },
            cache: "no-store",
        }
    );
    if (!res.ok) {
        return notFound();
        //throw new Error('Failed to fetch data')
    }
    return res.json();
}
export async function generateMetadata({ params }) {
    const post = await getData(params.id);
    return {
        title: post.title,
        description: post.desc,
    };
}
const BlogPost = async ({ params }) => {
    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <div className={styles.author}>
                        <span className={styles.username}>{data.username}</span>
                        <p className={styles.desc}>{data.desc}</p>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.text}>{data.content}</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={
                            data.img === ""
                                ? "https://images.pexels.com/photos/4031043/pexels-photo-4031043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                : data.img
                        }
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
