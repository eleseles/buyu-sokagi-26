import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Büyü Dünyasına Giriş",
    content: "Büyü dünyasının temellerini öğrenin ve kendi gücünüzü keşfedin. Bu yazıda, büyünün tarihçesi, temel prensipleri ve günlük hayatta nasıl kullanılabileceği hakkında bilgiler bulacaksınız.",
    author: "Merlin",
    date: "2024-03-15",
    likes: 156,
    comments: 23,
    shares: 45,
    image: "https://example.com/magic-intro.jpg"
  },
  {
    id: 2,
    title: "En Etkili Aşk Büyüleri",
    content: "Aşk hayatınızı canlandıracak ve ilişkilerinizi güçlendirecek büyüler hakkında detaylı bir rehber. Dikkatli kullanılması gereken bu büyülerin etik yönlerini de ele alıyoruz.",
    author: "Afrodit",
    date: "2024-03-10",
    likes: 289,
    comments: 56,
    shares: 78,
    image: "https://example.com/love-spells.jpg"
  },
  {
    id: 3,
    title: "Koruyucu Tılsımlar",
    content: "Kendinizi negatif enerjilerden korumak için kullanabileceğiniz tılsımlar ve onların yapılışı. Bu yazıda, farklı kültürlerden koruyucu sembolleri ve onların anlamlarını öğreneceksiniz.",
    author: "Gandalf",
    date: "2024-03-05",
    likes: 201,
    comments: 34,
    shares: 67,
    image: "https://example.com/protective-talismans.jpg"
  },
];

const BlogPost = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="bg-white bg-opacity-10 backdrop-blur-md overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl text-white">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-purple-100 mb-4">{post.content.substring(0, 150)}...</p>
        <div className="flex justify-between items-center text-purple-200 text-sm">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button variant="ghost" className="text-purple-300 hover:text-purple-100">
            <Heart className="w-5 h-5 mr-1" />
            {post.likes}
          </Button>
          <Button variant="ghost" className="text-purple-300 hover:text-purple-100">
            <MessageCircle className="w-5 h-5 mr-1" />
            {post.comments}
          </Button>
          <Button variant="ghost" className="text-purple-300 hover:text-purple-100">
            <Share2 className="w-5 h-5 mr-1" />
            {post.shares}
          </Button>
          <Button variant="outline" className="text-purple-300 hover:text-purple-100">
            <BookOpen className="w-5 h-5 mr-1" />
            Oku
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyü Dünyası Blog
        </motion.h1>
        <div className="mb-8 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Blog yazılarında ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white bg-opacity-20 text-white placeholder-purple-200 border-purple-300"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center text-white text-xl mt-8">Aradığınız kriterlere uygun blog yazısı bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;