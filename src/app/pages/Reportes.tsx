import { FileDown, FileSpreadsheet, Calendar, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function Reportes() {
  const summaryData = [
    { label: 'Total de Reservas', value: '234', icon: Calendar, color: 'text-primary' },
    { label: 'Ingresos Totales', value: '$156,780', icon: TrendingUp, color: 'text-accent' },
    { label: 'Tasa Promedio de Ocupación', value: '82%', icon: TrendingUp, color: 'text-chart-2' },
    { label: 'Ventas por Funcionario', value: '38.8', icon: TrendingUp, color: 'text-chart-4' },
  ];

  const monthlyData = [
    { month: 'Enero', reservations: 45, revenue: '$28,500', occupancy: '75%' },
    { month: 'Febrero', reservations: 52, revenue: '$32,800', occupancy: '81%' },
    { month: 'Marzo', reservations: 48, revenue: '$30,200', occupancy: '79%' },
    { month: 'Abril', reservations: 61, revenue: '$38,450', occupancy: '88%' },
    { month: 'Mayo', reservations: 58, revenue: '$36,600', occupancy: '85%' },
  ];

  const handleExportPDF = () => {
    // Mock function - in real app would generate PDF
    alert('Generando informe en PDF...');
  };

  const handleExportExcel = () => {
    // Mock function - in real app would generate Excel
    alert('Generando informe en Excel...');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-primary mb-2">Reportes y Estadísticas</h1>
        <p className="text-muted-foreground">Análisis y exportación de datos del sistema</p>
      </div>

      {/* Filter Section */}
      <Card className="border border-border p-6 mb-8">
        <h2 className="text-primary mb-4">Filtros de Reporte</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-2">
              Período
            </label>
            <Select defaultValue="month">
              <SelectTrigger className="bg-input-background border border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última Semana</SelectItem>
                <SelectItem value="month">Último Mes</SelectItem>
                <SelectItem value="quarter">Último Trimestre</SelectItem>
                <SelectItem value="year">Último Año</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-card-foreground mb-2">
              Tipo de Reporte
            </label>
            <Select defaultValue="general">
              <SelectTrigger className="bg-input-background border border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="reservations">Reservas</SelectItem>
                <SelectItem value="revenue">Ingresos</SelectItem>
                <SelectItem value="employees">Funcionarios</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-card-foreground mb-2">
              Estado
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-input-background border border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="confirmed">Confirmados</SelectItem>
                <SelectItem value="pending">Pendientes</SelectItem>
                <SelectItem value="cancelled">Cancelados</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="p-6 border border-border">
              <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${item.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-muted-foreground mb-1">{item.label}</h3>
              <p className="text-3xl font-semibold text-primary">{item.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Monthly Data Table */}
      <Card className="border border-border mb-8">
        <div className="p-6 border-b border-border">
          <h2 className="text-primary">Resumen Mensual</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Mes</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Reservas</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Ingresos</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-primary">Ocupación</th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {monthlyData.map((data) => (
                <tr key={data.month} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-card-foreground font-medium">{data.month}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{data.reservations}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{data.revenue}</td>
                  <td className="px-6 py-4 text-sm text-card-foreground">{data.occupancy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Export Actions */}
      <Card className="border border-border p-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-primary mb-3">Exportar Informe</h2>
          <p className="text-muted-foreground mb-8">
            Descargue el informe completo en el formato de su preferencia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleExportPDF}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-6 h-auto"
              size="lg"
            >
              <FileDown className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Exportar Informe en PDF</div>
                <div className="text-xs opacity-90">Formato portable para visualización</div>
              </div>
            </Button>

            <Button
              onClick={handleExportExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 h-auto"
              size="lg"
            >
              <FileSpreadsheet className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Exportar Informe en Excel</div>
                <div className="text-xs opacity-90">Formato editable para análisis</div>
              </div>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
