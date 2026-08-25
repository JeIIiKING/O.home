'use client';
// 그림백업 작성창 (4.11) — 공용 폼(BackupForm) 사용, 수정은 /backup/[id]/edit
import React from 'react';
import { Backup2Form } from '@/components/backup/Backup2Form';

export default function Backup2WritePage() {
  return <Backup2Form initial={null} />;
}
