export function Home() {
  return (<div>
    <form>
      <label htmlFor="task">Vou trabalher em</label>
      <input id="task"/>

      <label htmlFor="minutesAmount">durante</label>
      <input type="Number" id="minutesAmount"/>

      <span>minutos.</span>
   
    
    <div>
      <span>0</span>
      <span>0</span>
      <span>:</span>
      <span>0</span>
      <span>0</span>

    </div>

    <button>Começar</button>
    </form>
  </div>
  )
}
