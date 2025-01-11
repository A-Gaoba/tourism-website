interface City {
  id: string
  name: string
}

interface CityFilterProps {
  cities: City[]
  selectedCity: string
  onSelectCity: (cityId: string) => void
}

const CityFilter: React.FC<CityFilterProps> = ({ cities, selectedCity, onSelectCity }) => {
  return (
    <div className="mb-4">
      <label htmlFor="cityFilter" className="block mb-2 font-bold">تصفية حسب المدينة:</label>
      <select
        id="cityFilter"
        value={selectedCity}
        onChange={(e) => onSelectCity(e.target.value)}
        className="w-full p-2 rounded-md neumorphic-shadow focus:neumorphic-inset transition-all duration-300 bg-background"
      >
        <option value="all">كل المدن</option>
        {cities.map(city => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>
    </div>
  )
}

export default CityFilter

