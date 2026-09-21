import React from 'react';
import { Battery, Zap, Sun } from 'lucide-react';
import type { HourlyPlan } from '../../types/api.types';
import { Badge } from '../ui/Badge';
import { formatHour } from '../../data/sampleScenario';

interface HourlyPlanTableProps {
  plan: HourlyPlan[];
}

export function HourlyPlanTable({ plan }: HourlyPlanTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
      <table className="w-full text-left text-sm text-text-muted bg-bg-panel">
        <thead className="bg-bg-base text-text-base uppercase font-medium text-xs border-b border-border">
          <tr>
            <th className="px-4 py-3 border-r border-border">Hour</th>
            <th className="px-4 py-3"><div className="flex items-center"><Zap className="h-4 w-4 mr-1 text-blue-500" /> Grid (kWh)</div></th>
            <th className="px-4 py-3"><div className="flex items-center"><Sun className="h-4 w-4 mr-1 text-amber-500" /> Solar Used (kWh)</div></th>
            <th className="px-4 py-3"><div className="flex items-center"><Battery className="h-4 w-4 mr-1 text-green-500" /> Action</div></th>
            <th className="px-4 py-3"><div className="flex items-center"><Battery className="h-4 w-4 mr-1 text-green-500" /> Battery Δ (kWh)</div></th>
            <th className="px-4 py-3 border-r border-border"><div className="flex items-center"><Battery className="h-4 w-4 mr-1 text-green-500" /> Final SOC (kWh)</div></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {plan.map((row) => (
            <tr key={row.hour} className="hover:bg-bg-base transition-colors">
              <td className="px-4 py-3 font-medium text-text-base border-r border-border bg-bg-base/50">
                {formatHour(row.hour)}
              </td>
              <td className="px-4 py-3 font-mono">{row.grid_kwh.toFixed(2)}</td>
              <td className="px-4 py-3 font-mono text-amber-700">{row.solar_used_kwh.toFixed(2)}</td>
              <td className="px-4 py-3">
                {row.battery_action === 'charge' && <Badge variant="success">Charge</Badge>}
                {row.battery_action === 'discharge' && <Badge variant="info">Discharge</Badge>}
                {row.battery_action === 'idle' && <Badge variant="default">Idle</Badge>}
              </td>
              <td className="px-4 py-3 font-mono">
                {row.battery_kwh === 0 ? (
                  <span className="text-text-muted">0.00</span>
                ) : (
                  <span className={row.battery_action === 'charge' ? 'text-green-600' : 'text-blue-600'}>
                    {row.battery_action === 'charge' ? '+' : '-'}{row.battery_kwh.toFixed(2)}
                  </span>
                )}
              </td>
              <td className="px-4 py-3 font-mono font-medium text-text-base border-r border-border">
                {row.battery_energy_after_kwh.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
