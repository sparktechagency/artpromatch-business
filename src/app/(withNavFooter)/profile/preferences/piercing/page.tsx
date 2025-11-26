'use client';

import { expertisePiercingsServicesList } from '@/constants';
import { Form } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const PiercingPage = () => {
  const [selectedPiercing, setSelectedPiercing] = useState<string[]>([]);

  useEffect(() => {
    if (selectedPiercing.length > 0) {
      localStorage.setItem(
        'selectedPiercing',
        JSON.stringify(selectedPiercing)
      );
    }
  }, [selectedPiercing]);

  const handleSelect = (value: string) => {
    setSelectedPiercing(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Select Your Favorite Piercings</h1>
        <p className="text-secondary">Pick the ones that match your vibe.</p>
      </div>

      <Form
        name="select-piercing"
        initialValues={{ remember: true }}
        layout="vertical"
        className="mb-10 w-full"
      >
        <div className="flex flex-col gap-4">
          {Array.from(
            { length: Math.ceil(expertisePiercingsServicesList.length / 7) },
            (_, i) => (
              <div
                key={i}
                className="flex justify-start items-center gap-4 flex-wrap"
              >
                {expertisePiercingsServicesList
                  .slice(i * 7, i * 7 + 7)
                  .map((piercing: string) => (
                    <button
                      key={piercing}
                      type="button"
                      onClick={() => handleSelect(piercing)}
                      className={`px-8 py-2 rounded-3xl border transition-colors ${
                        selectedPiercing.includes(piercing)
                          ? 'border-primary text-primary font-semibold'
                          : 'hover:border-primary'
                      }`}
                    >
                      {piercing}
                    </button>
                  ))}
              </div>
            )
          )}
        </div>

        <Link href="/profile/preferences">
          <div className="flex justify-end items-end mt-6">
            <button className="bg-primary text-white py-3 px-6 rounded-lg">
              Save
            </button>
          </div>
        </Link>
      </Form>
    </div>
  );
};

export default PiercingPage;
