"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
    // const [data,setData] = useState([]);
    // const [error,setErr] = useState(false);
    // const [isLoading,setIsLoading] = useState(false);
    // useEffect(()=>{
    //   const getData = async () => {
    //     setIsLoading(true);

    //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //       cache: 'no-store',
    //     });
    //     if (!res.ok) {
    //       setErr(true);
    //     }
    //     const data = await res.json();
    //     setData(data);
    //     setIsLoading(false);
    //   };
    //   getData();
    // },[]);
    const session = useSession();
    const router = useRouter();
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, mutate, error, isLoading } = useSWR(
        `api/posts?username=${session?.data?.user.name}`,
        fetcher
    );

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;
        console.log(
            JSON.stringify({
                title,
                desc,
                img,
                content,
                username: session.data.user.name,
            })
        );
        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc,
                    img,
                    content,
                    username: session.data.user.name,
                }),
            });
            mutate();
            e.target.reset();
        } catch (err) {
            console.log(err);
        }
    };
    const handleDelete = async (id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });
            mutate();
        } catch (err) {
            console.log(err);
        }
    };
    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {isLoading
                        ? "loading"
                        : data?.map((post) => (
                              <div className={styles.post} key={post._id}>
                                  <div className={styles.imgContainer}>
                                      <Image
                                          src={
                                              post.img === ""
                                                  ? "https://images.pexels.com/photos/4031043/pexels-photo-4031043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                  : post.img
                                          }
                                          alt=""
                                          fill={true}
                                          className={styles.img}
                                      />
                                  </div>
                                  <h2 className={styles.postTitle}>
                                      {post.title}
                                  </h2>
                                  <span
                                      className={styles.delete}
                                      onClick={() => handleDelete(post._id)}
                                  >
                                      X
                                  </span>
                              </div>
                          ))}
                </div>
                <form className={styles.new} onSubmit={handleSubmit}>
                    <h1>새 글을 등록해 주세요.</h1>
                    <input
                        type="text"
                        placeholder="제목"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="연락처"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="이미지 링크 / 비워 두셔도 됩니다"
                        className={styles.input}
                    />
                    <textarea
                        placeholder="내용"
                        className={styles.textArea}
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button className={styles.button}>Send</button>
                </form>
            </div>
        );
    }
};

export default Dashboard;
