'use client';
// 그림백업 수정 (4.11) — 작성자 또는 관리자만
import React from 'react';
import { useParams } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { useLocalList } from '@/lib/postStore';
import { BackupPost, BACKUP_SEED } from '@/lib/galleryStore';
import { Backup2Form } from '@/components/backup/Backup2Form';
import { PageTitle } from '@/components/ui/PageText';

export default function Backup2EditPage() {
  const { id } = useParams<{ id: string }>();
  const { user, isAdmin } = useAuth();
  const [posts, , loaded] = useLocalList<BackupPost>('ohome.backup2.v1', BACKUP_SEED);
  const p = posts.find(x => x.id === id);

  if (!loaded) return <section className="page" />;
  if (!p || !(isAdmin || p.authorId === user?.id)) {
    return (
      <section className="page">
        <div className="page-head"><PageTitle>EDIT</PageTitle><p>게시물을 찾을 수 없거나 수정 권한이 없습니다</p></div>
      </section>
    );
  }
  return <Backup2Form initial={p} />;
}
