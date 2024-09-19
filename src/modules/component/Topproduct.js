import React from 'react'

function Topproduct() {
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Popularity</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Bathroom Essentials</td>
      <td>
        <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
               <div class="progress-bar bg-info"style={{width:'69%'}} >69%</div>
        </div>
</td>
      <td>45%</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Grocery</td>
      <td>
      <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style={{width:'77%'}}>77%</div>
</div>
      </td>
      <td>55%</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Home Decor </td>
      <td>
      <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style={{width:'50%'}} >50%</div>
</div>
      </td>
      <td>98%</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Cloths</td>
      <td>
      <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style={{width:'80%'}} >80%</div>
</div>
      </td>
      <td>98%</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Electronics</td>
      <td>
      <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style={{width:'87%'}} >87%</div>
</div>
      </td>
      <td>98%</td>
    </tr>
  </tbody>
</table>
  )
}

export default Topproduct