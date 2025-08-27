import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface Comment {
  author: string;
  text: string;
  timestamp: string;
}

interface CommentsProps {
  gameId: string;
}

const formatTimeAgo = (isoString: string): string => {
  const date = new Date(isoString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return `${Math.floor(interval)} years ago`;
  interval = seconds / 2592000;
  if (interval > 1) return `${Math.floor(interval)} months ago`;
  interval = seconds / 86400;
  if (interval > 1) return `${Math.floor(interval)} days ago`;
  interval = seconds / 3600;
  if (interval > 1) return `${Math.floor(interval)} hours ago`;
  interval = seconds / 60;
  if (interval > 1) return `${Math.floor(interval)} minutes ago`;
  if (seconds < 10) return "Just now";
  return `${Math.floor(seconds)} seconds ago`;
};


const Comments: React.FC<CommentsProps> = ({ gameId }) => {
  const storageKey = `comments_${gameId}`;
  
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const storedComments = localStorage.getItem(storageKey);
      return storedComments ? JSON.parse(storedComments) : [];
    } catch (error) {
      console.error("Failed to parse comments from localStorage", error);
      return [];
    }
  });
  
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(comments));
    } catch (error) {
      console.error("Failed to save comments to localStorage", error);
    }
  }, [comments, storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) {
      setError('Name and comment cannot be empty.');
      return;
    }
    if (author.trim().length > 30) {
        setError('Name cannot exceed 30 characters.');
        return;
    }
    if (text.trim().length > 500) {
        setError('Comment cannot exceed 500 characters.');
        return;
    }

    const newComment: Comment = {
      author: author.trim(),
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    setComments([newComment, ...comments]);
    setAuthor('');
    setText('');
    setError('');
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <Icon icon="fa-comments" />
        Join the Conversation
      </h2>

      <form onSubmit={handleSubmit} className="bg-[#101010] border border-gray-800 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-1">
            <label htmlFor="author" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Your name"
              className="w-full bg-[#181818] border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              maxLength={30}
            />
          </div>
          <div className="md:col-span-2">
             <label htmlFor="comment" className="block text-sm font-medium text-gray-400 mb-2">Your Comment</label>
             <textarea
              id="comment"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts, tips, or high scores..."
              rows={3}
              className="w-full bg-[#181818] border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition resize-none"
              maxLength={500}
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg shadow-violet-600/30"
          >
            <Icon icon="fa-paper-plane" />
            <span>Post Comment</span>
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="bg-[#101010] border border-gray-800 rounded-lg p-5">
              <div className="flex items-start space-x-4">
                <div className="bg-violet-800/50 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                    <Icon icon="fa-user" className="text-violet-300"/>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-white text-lg">{comment.author}</p>
                        <p className="text-xs text-gray-500">{formatTimeAgo(comment.timestamp)}</p>
                    </div>
                    <p className="text-gray-300 mt-1 whitespace-pre-wrap break-words">{comment.text}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-[#101010] border-2 border-dashed border-gray-800 rounded-lg">
            <Icon icon="fa-comment-slash" className="text-4xl text-gray-600 mb-4" />
            <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
