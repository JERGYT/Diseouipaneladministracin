import { Search, UserPlus, Edit2, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export default function Funcionarios() {
  const [searchTerm, setSearchTerm] = useState('');

  const employees = [
    {
      id: 'EMP001',
      name: 'Roberto Sánchez',
      role: 'Agente Senior',
      sales: 45,
      status: 'Activo',
      email: 'roberto.sanchez@hotel.com',
      phone: '+56 9 1234 5678',
    },
    {
      id: 'EMP002',
      name: 'Valentina Torres',
      role: 'Agente',
      sales: 32,
      status: 'Activo',
      email: 'valentina.torres@hotel.com',
      phone: '+56 9 2345 6789',
    },
    {
      id: 'EMP003',
      name: 'Diego Muñoz',
      role: 'Supervisor',
      sales: 58,
      status: 'Activo',
      email: 'diego.munoz@hotel.com',
      phone: '+56 9 3456 7890',
    },
    {
      id: 'EMP004',
      name: 'Camila Rojas',
      role: 'Agente',
      sales: 28,
      status: 'Activo',
      email: 'camila.rojas@hotel.com',
      phone: '+56 9 4567 8901',
    },
    {
      id: 'EMP005',
      name: 'Sebastián Castro',
      role: 'Agente Senior',
      sales: 51,
      status: 'Activo',
      email: 'sebastian.castro@hotel.com',
      phone: '+56 9 5678 9012',
    },
    {
      id: 'EMP006',
      name: 'Francisca Vargas',
      role: 'Agente',
      sales: 19,
      status: 'Inactivo',
      email: 'francisca.vargas@hotel.com',
      phone: '+56 9 6789 0123',
    },
  ];

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-primary mb-2">Funcionarios de Ventas</h1>
          <p className="text-muted-foreground">Gestione el equipo de ventas del hotel</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <UserPlus className="w-5 h-5 mr-2" />
          Nuevo Funcionario
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 border border-border">
          <h3 className="text-muted-foreground mb-2">Total Funcionarios</h3>
          <p className="text-3xl font-semibold text-primary">6</p>
        </Card>
        <Card className="p-6 border border-border">
          <h3 className="text-muted-foreground mb-2">Funcionarios Activos</h3>
          <p className="text-3xl font-semibold text-green-600">5</p>
        </Card>
        <Card className="p-6 border border-border">
          <h3 className="text-muted-foreground mb-2">Ventas Totales</h3>
          <p className="text-3xl font-semibold text-accent">233</p>
        </Card>
      </div>

      {/* Search Bar */}
      <Card className="border border-border p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-input-background border border-border"
          />
        </div>
      </Card>

      {/* Employees Table */}
      <Card className="border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-primary">Lista de Funcionarios</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Nombre</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Rol</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Contacto</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Ventas Realizadas</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Estado</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-card-foreground font-medium">{employee.id}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{employee.name}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{employee.role}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-card-foreground">
                        <Mail className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs">{employee.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-card-foreground">
                        <Phone className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs">{employee.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold">
                      {employee.sales}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        employee.status === 'Activo'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4 text-primary" />
                    </button>
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
