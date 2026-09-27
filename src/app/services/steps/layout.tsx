import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ขั้นตอนการรับบริการ | โรงพยาบาลซำสูง',
  description: 'ขั้นตอนการมารับบริการที่โรงพยาบาลซำสูง สำหรับผู้ป่วยใหม่และผู้ป่วยเก่า',
};

export default function StepsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
