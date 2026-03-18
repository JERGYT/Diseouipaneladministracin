import { BarChart3, Users, Calendar, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/card';

export default function Dashboard() {
  const stats = [
    {
      title: 'Reservas Activas',
      value: '48',
      change: '+12%',
      icon: Calendar,
      color: 'text-primary',
    },
    {
      title: 'Huéspedes Hoy',
      value: '156',
      change: '+8%',
      icon: Users,
      color: 'text-accent',
    },
    {
      title: 'Ingresos del Mes',
      value: '$45,280',
      change: '+23%',
      icon: TrendingUp,
      color: 'text-chart-2',
    },
    {
      title: 'Tasa de Ocupación',
      value: '87%',
      change: '+5%',
      icon: BarChart3,
      color: 'text-chart-4',
    },
  ];

  const recentBookings = [
    { id: 1, guest: 'María González', room: 'Suite 201', date: '2026-03-18', status: 'Confirmada' },
    { id: 2, guest: 'Carlos Pérez', room: 'Habitación 305', date: '2026-03-19', status: 'Pendiente' },
    { id: 3, guest: 'Ana Martínez', room: 'Suite 102', date: '2026-03-20', status: 'Confirmada' },
    { id: 4, guest: 'Luis Rodríguez', room: 'Habitación 210', date: '2026-03-21', status: 'Confirmada' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-primary mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido al panel de control del sistema de reservas</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
              <h3 className="text-muted-foreground mb-1">{stat.title}</h3>
              <p className="text-3xl font-semibold text-primary">{stat.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Recent Bookings */}
      <Card className="border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-primary">Reservas Recientes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Huésped</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Habitación</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Fecha de Entrada</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Estado</th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-card-foreground">{booking.id}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{booking.guest}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{booking.room}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{booking.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === 'Confirmada'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
