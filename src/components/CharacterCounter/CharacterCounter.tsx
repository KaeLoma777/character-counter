import React, { useState, useCallback } from "react";
import { TextInput } from "../TexInput/TextInput"; 
import type { CharacterCounterProps, TextStats } from "../../types";
import {StatsDisplay} from '../StatsDisplay/StatsDisplay';


export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords,
  maxWords,
  targetReadingTime
}) => {
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0
  });
  const handleTextChange = useCallback((value: string) => {
    const characters = value.length;
    const words = value.trim().split(/\s+/).filter(Boolean).length;
    const reading = words / 200;
    setStats({
      characterCount: characters,
      wordCount: words,
      readingTime: reading
    });
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <TextInput
        onTextChange={handleTextChange}
        placeholder="Start typing your content here..."
        initialValue=""
      />
      <StatsDisplay stats={stats} showReadingTime={true} />
      {(minWords !== undefined || maxWords !== undefined) && (
        <div className="mt-2 text-center text-sm text-gray-500">
          {minWords !== undefined && (
            <span className="mr-2">Min: {minWords}</span>
          )}
          {maxWords !== undefined && (
            <span>Max: {maxWords}</span>
          )}
        </div>
      )}
      {targetReadingTime !== undefined && (
        <div className="mt-4 text-sm text-center">
          <span className={
            stats.readingTime >= targetReadingTime
              ? 'text-green-600'
              : 'text-red-600'
          }>
            Reading time {stats.readingTime >= targetReadingTime ? 'meets' : 'is below'} target of {targetReadingTime} min
          </span>
        </div>
      )}
    </div>
  );
};


