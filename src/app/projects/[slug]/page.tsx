import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

const ComingSoonPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-[350px] bg-gray-800 border-gray-700">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-gray-100">Coming Soon</CardTitle>
                    <CardDescription className="text-center text-gray-400">
                        Our project details are on the way
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center space-y-4">
                        <Clock className="w-16 h-16 text-blue-500" />
                        <p className="text-center text-gray-300">
                            We&apos;re working hard to bring you something amazing. Stay tuned for updates!
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Notify Me
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ComingSoonPage;