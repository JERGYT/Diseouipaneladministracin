import { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function Reservas() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const reservations = [
    {
      id: 1,
      guest: 'María González',
      checkIn: '2026-03-18',
      checkOut: '2026-03-22',
      roomType: 'Suite',
      status: 'Confirmada',
    },
    {
      id: 2,
      guest: 'Carlos Pérez',
      checkIn: '2026-03-19',
      checkOut: '2026-03-21',
      roomType: 'Habitación Doble',
      status: 'Pendiente',
    },
    {
      id: 3,
      guest: 'Ana Martínez',
      checkIn: '2026-03-20',
      checkOut: '2026-03-25',
      roomType: 'Suite',
      status: 'Confirmada',
    },
    {
      id: 4,
      guest: 'Luis Rodríguez',
      checkIn: '2026-03-21',
      checkOut: '2026-03-23',
      roomType: 'Habitación Simple',
      status: 'Confirmada',
    },
    {
      id: 5,
      guest: 'Patricia Silva',
      checkIn: '2026-03-22',
      checkOut: '2026-03-26',
      roomType: 'Suite Ejecutiva',
      status: 'Confirmada',
    },
  ];

  const filteredReservations = reservations.filter((reservation) =>
    reservation.guest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-primary mb-2">Gestión de Reservas</h1>
          <p className="text-muted-foreground">Administre todas las reservas del hotel</p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nueva Reserva
        </Button>
      </div>

      {/* New Reservation Form */}
      {showForm && (
        <Card className="border border-border p-6 mb-8">
          <h2 className="text-primary mb-6">Crear Nueva Reserva</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="guestName">Nombre del Huésped</Label>
              <Input
                id="guestName"
                placeholder="Ingrese el nombre completo"
                className="bg-input-background border border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="roomType">Tipo de Habitación</Label>
              <Select>
                <SelectTrigger className="bg-input-background border border-border">
                  <SelectValue placeholder="Seleccione tipo de habitación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="simple">Habitación Simple</SelectItem>
                  <SelectItem value="doble">Habitación Doble</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                  <SelectItem value="suite-ejecutiva">Suite Ejecutiva</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkIn">Fecha de Entrada</Label>
              <Input
                id="checkIn"
                type="date"
                className="bg-input-background border border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkOut">Fecha de Salida</Label>
              <Input
                id="checkOut"
                type="date"
                className="bg-input-background border border-border"
              />
            </div>

            <div className="md:col-span-2 flex gap-4 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Guardar Reserva
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Search Bar */}
      <Card className="border border-border p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre del huésped..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-input-background border border-border"
          />
        </div>
      </Card>

      {/* Reservations Table */}
      <Card className="border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-primary">Reservas Registradas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Huésped</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Entrada</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Salida</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Tipo de Habitación</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Estado</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {filteredReservations.map((reservation) => (
                <tr key={reservation.id} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-card-foreground">{reservation.id}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{reservation.guest}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{reservation.checkIn}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{reservation.checkOut}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{reservation.roomType}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        reservation.status === 'Confirmada'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 text-primary" />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
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
