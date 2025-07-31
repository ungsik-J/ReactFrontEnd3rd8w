import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'

/**
 * useEffect[dependency]
 * @returns 
 */
export default function UseEffect() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadCount, setLoadCount] = useState(10); // 기본 10개 로드
    const bottomRef = useRef(null); // 스크롤 타겟 ref

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            const slicedPosts = response.data.slice(0, loadCount);
            setPosts(slicedPosts);
        } catch (error) {
            console.error('데이터 로딩 실패:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [loadCount]); /** ← useEffect [의존성]이 변경 되면 재실행 됨 */

    useEffect(() => {
        // posts가 변경될 때 스크롤을 맨 아래로 이동
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [posts]);

    const handleLoadMore = () => {
        setLoadCount(prev => prev + 10);
    };

    return (
        <div style={{ overflowY: 'auto', maxHeight: '80vh' }}>
            {loading ? (
                <p>로딩 중...</p>
            ) : (
                <>
                    <ul style={{ textAlign: 'left' }}>
                        {posts.map((post, index) => (
                            <li key={post.id}>
                                <h2>No.{index + 1}</h2>
                                <h2>{post.name}</h2>
                                <p>{post.email}</p>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                    <div ref={bottomRef} /> {/* 스크롤 타겟 */}
                    {posts.length < 100 && ( // 최대 100개 제한 (API 기준)
                        <button onClick={handleLoadMore}>➕ 더보기</button>
                    )}
                </>
            )}
        </div>
    );
}
