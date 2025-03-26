<script>
  export let scores = {};
  export let buttonText = "View Performance Scores";
</script>

<style>
  .score-container {
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    font-family: 'Merriweather', serif;
  }
  
  .score-button {
    padding: 6px 14px;
    background-color: var(--color-inverse-secondary, #f5f5f5);
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    transition: all 0.2s ease;
    color: var(--color-primary, #333);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    position: relative;
    padding-left: 28px;
  }
  
  .score-button:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 9px;
    height: 9px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAANUlEQVQImWP8sij2PwMOwAKlGbHI/WfCpYuBgYEBLskdu4iBgYHhPxKbAV0nivF4jWXE51oAaSYKByQ4Eh0AAAAASUVORK5CYII=');
    background-size: 100% 100%;
    image-rendering: pixelated;
  }
  
  .score-button:hover {
    background-color: #f5f2e8;
    border-color: #d7a03c;
  }
  
  .score-details {
    display: none;
    position: absolute;
    left: 0;
    top: calc(100% + 5px);
    width: 320px;
    background-color: var(--color-inverse, white);
    border: 1px solid #e8ca88;
    border-radius: 6px;
    padding: 16px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    z-index: 10;
    font-size: 0.95em;
    animation: scorePopIn 0.2s ease-out;
  }
  
  @keyframes scorePopIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .score-container:hover .score-details {
    display: block;
  }
  
  .score-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    padding-bottom: 6px;
    border-bottom: 1px dotted #eee;
  }
  
  .score-item:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
  
  .score-item span:first-child {
    font-weight: 500;
    flex: 1;
  }
  
  .score-bar {
    background-color: #e0e0e0;
    height: 8px;
    width: 120px;
    border-radius: 4px;
    margin: 0 10px;
    overflow: hidden;
    flex: 2;
  }
  
  .score-fill {
    height: 100%;
    background: linear-gradient(90deg, #e8ca88, #d7a03c);
    border-radius: 4px;
    transition: width 0.5s ease-out;
  }
  
  .score-item span:last-child {
    font-weight: bold;
    color: #d7a03c;
    min-width: 36px;
    text-align: right;
  }
  
  .score-details::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 12px;
    height: 12px;
    background-color: var(--color-inverse, white);
    border-left: 1px solid #e8ca88;
    border-top: 1px solid #e8ca88;
    transform: rotate(45deg);
  }
  
  @media (max-width: 640px) {
    .score-details {
      width: 280px;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .score-details::before {
      left: 50%;
      margin-left: -6px;
    }
  }
</style>

<div class="score-container">
  <div class="score-button">{buttonText}</div>
  <div class="score-details">
    {#each Object.entries(scores) as [category, score]}
      <div class="score-item">
        <span>{category}:</span>
        <div class="score-bar"><div class="score-fill" style="width: {score * 10}%"></div></div>
        <span>{score}/10</span>
      </div>
    {/each}
  </div>
</div> 