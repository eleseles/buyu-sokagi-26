import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, CheckCircle } from 'lucide-react';

const GunlukGorevler = ({ tasks, onCompleteTask }) => {
  return (
    <Card className="mt-6 bg-white bg-opacity-20 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-2xl text-white flex items-center">
          <Briefcase className="w-6 h-6 mr-2" />
          Günlük Görevler
        </CardTitle>
      </CardHeader>
      <CardContent>
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between mb-2">
            <span className={`text-lg ${task.completed ? 'text-green-400 line-through' : 'text-white'}`}>
              {task.name}
            </span>
            {task.completed ? (
              <CheckCircle className="w-6 h-6 text-green-400" />
            ) : (
              <Button onClick={() => onCompleteTask(task.id)} size="sm" variant="outline">
                Tamamla
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default GunlukGorevler;