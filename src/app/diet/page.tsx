import DietTable from '../components/DietTable/DietTable';
import MenuTopBar from '../components/MenuTopBar/MenuTopBar';

export default function Home() {
  return (
    <div>
      <MenuTopBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DietTable/>
      </main>
    </div>
  )
}
