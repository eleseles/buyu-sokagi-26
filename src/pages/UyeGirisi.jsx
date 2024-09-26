import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';

const UyeGirisi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Üye Girişi
        </motion.h1>
        <Card className="max-w-md mx-auto bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Hesabınıza Giriş Yapın</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input type="email" placeholder="E-posta" className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300" />
              <Input type="password" placeholder="Şifre" className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300" />
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Giriş Yap</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UyeGirisi;