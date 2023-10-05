<script >
  import Select from "./Select.svelte"
  import { onMount } from "svelte";

  $: responseData = {}
  $: rates = []
  $: firstValue = 1
  $: firstRate = "USD"
  $: secondRate = "USD"
  $: secondValue = 1



  function getRates(value){
    fetch(`https://open.er-api.com/v6/latest/${value}`
  ).then(response => {return response.json()}
  ).then(data=>{
    return responseData = {...data}
    })
  }
  
  onMount(()=>{
    getRates("USD")

    fetch(`https://open.er-api.com/v6/latest/USD`
  ).then(response => {return response.json()}
  ).then(data=>{
    return rates =  [...Object.keys(data.rates)]
    })
  })

</script>

<main>
  <div class="cont">
    <div>
      <Select options={[...rates]}
          display_func={o => o.text}
          bind:value={firstRate}
      />
      <input 
        on:focus={()=>getRates(firstRate)}
        value={responseData.rates !== undefined ? secondValue * responseData.rates[firstRate] : null}
        on:input={(event)=>firstValue=event.target.value}
      />
    </div>
    <div>
      <Select options={[...rates]}
            display_func={o => o.text}
            bind:value={secondRate}/>
        <input 
          on:focus={()=>getRates(secondRate)} value={
          responseData.rates !== undefined ? firstValue * responseData.rates[secondRate] : null} 
          on:input={(event)=>secondValue=event.target.value}
        />
    </div>
  </div>
</main>

<style>
  .cont{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
