'use client';

import React from 'react';
import { PulsatingButton } from "@/components/ui/pulsating-button";

function GetInTouch() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-3xl font-bold mb-4 animate-fade-in">
          Ready to get started?
        </h2>
        <h1 className="text-2xl sm:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Let&apos;s craft your next digital story
        </h1>
        <div className="flex justify-center">
          <PulsatingButton>Get In Touch</PulsatingButton>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;