import React from 'react';
import { OKLCH } from '../../../contracts/abi';
import { oklchToHex, hexToOklch, hexToRgb, rgbToHex } from '../../utils/okLch';

interface ColorPickerProps {
    value: OKLCH;
    onChange: (val: OKLCH) => void;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  const hex = oklchToHex(value.l, value.c, value.h);
  const rgb = hexToRgb(hex);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (/^#[0-9A-F]{6}$/i.test(val)) {
          onChange(hexToOklch(val));
      }
  };

  const handleRgbChange = (chan: 'r'|'g'|'b', val: string) => {
      const num = parseInt(val) || 0;
      const newRgb = { ...rgb, [chan]: Math.max(0, Math.min(255, num)) };
      onChange(hexToOklch(rgbToHex(newRgb.r, newRgb.g, newRgb.b)));
  };

  const openEyedropper = async () => {
      // @ts-ignore
      if (window.EyeDropper) {
          try {
              // @ts-ignore
              const dropper = new window.EyeDropper();
              const result = await dropper.open();
              onChange(hexToOklch(result.sRGBHex));
          } catch (e) {
              console.warn('Eyedropper failed', e);
          }
      } else {
          alert('Przeglądarka nie obsługuje EyeDropper API');
      }
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex gap-3">
          <input
            type="color"
            value={hex}
            onChange={(e) => onChange(hexToOklch(e.target.value))}
            className="w-12 h-12 cursor-pointer rounded-lg border-none bg-transparent"
          />
          <div className="flex-1 space-y-1">
              <label className="text-[8px] font-black uppercase text-gray-400">HEX Input</label>
              <div className="flex gap-2">
                  <input
                    type="text"
                    value={hex}
                    onChange={handleHexChange}
                    className="flex-1 text-[10px] font-mono font-bold p-1.5 border rounded uppercase outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={openEyedropper}
                    className="px-2 border rounded hover:bg-gray-50 text-[12px]"
                    title="Eyedropper"
                  >
                      👁️‍🗨️
                  </button>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
          {['r', 'g', 'b'].map(c => (
              <div key={c} className="space-y-1">
                  <label className="text-[8px] font-black uppercase text-gray-400">{c}</label>
                  <input
                    type="number"
                    value={rgb[c as keyof typeof rgb]}
                    onChange={(e) => handleRgbChange(c as any, e.target.value)}
                    className="w-full text-[10px] font-mono p-1 border rounded outline-none focus:border-blue-500"
                  />
              </div>
          ))}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-dashed">
          <div className="space-y-1">
              <label className="text-[8px] font-black uppercase text-gray-400">Light</label>
              <div className="text-[10px] font-mono font-bold">{(value.l * 100).toFixed(1)}%</div>
          </div>
          <div className="space-y-1">
              <label className="text-[8px] font-black uppercase text-gray-400">Chroma</label>
              <div className="text-[10px] font-mono font-bold">{value.c.toFixed(3)}</div>
          </div>
          <div className="space-y-1">
              <label className="text-[8px] font-black uppercase text-gray-400">Hue</label>
              <div className="text-[10px] font-mono font-bold">{value.h.toFixed(0)}°</div>
          </div>
      </div>
    </div>
  );
};
