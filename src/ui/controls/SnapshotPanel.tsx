import React from 'react';
import { useSnapshotStore } from '../../store/snapshotStore';

export const SnapshotPanel = () => {
  const snapshots = useSnapshotStore(s => s.snapshots);

  return (
    <div className="space-y-2">
      <h3 className="text-[10px] font-bold uppercase text-gray-400">Snapshoty</h3>
      <div className="max-h-32 overflow-y-auto space-y-1">
        {snapshots.map(s => (
            <div key={s.id} className="p-2 border rounded text-[10px] flex justify-between items-center bg-white hover:bg-gray-50 cursor-pointer">
            <span>{s.id.slice(0, 8)}</span>
            <span className="text-gray-400">2:41 PM</span>
            </div>
        ))}
        {snapshots.length === 0 && <div className="text-[10px] text-gray-400 italic">Brak zapisanych wersji</div>}
      </div>
    </div>
  );
};
