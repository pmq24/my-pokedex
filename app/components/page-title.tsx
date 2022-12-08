import { type ReactNode } from 'react';

type Props = {
  title?: string;
  right?: ReactNode;
};

export default function PageTitle({ title, right }: Props) {
  return (
    <div className="flex w-full mb-4">
      <div className="flex-auto">
        <div className="prose">
          <h1>{title}</h1>
        </div>
      </div>
      {right}
    </div>
  );
}
