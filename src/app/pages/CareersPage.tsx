import { useEffect } from 'react';
import { Careers } from '@/app/components/Careers';

export function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Careers />
    </div>
  );
}
