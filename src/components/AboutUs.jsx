import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Curabitur commodo nunc et diam tristique consectetur. Sed placerat erat
        suscipit fermentum vestibulum. Quisque ullamcorper, tortor sed bibendum
        euismod, libero magna dapibus tellus, ut accumsan enim mi sed nisi.
        Aliquam blandit commodo enim nec tincidunt. Vivamus maximus ligula quis
        aliquam varius. Morbi auctor sodales dolor, eget dapibus augue.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Pellentesque enim quam, varius eu semper sit
        amet, euismod sed leo.
      </p>
      <p>
        Sed id nunc sagittis, rhoncus mauris facilisis, vestibulum felis.
        Curabitur ac commodo ante. Suspendisse est nibh, finibus eu magna eget,
        feugiat mattis ipsum. Nullam ipsum mauris, ornare ac vestibulum et,
        porttitor nec velit. Nullam justo lectus, porttitor at laoreet non,
        tristique eget orci. Nunc at sagittis odio, sed pharetra arcu. Quisque
        maximus porttitor turpis, ullamcorper semper dui. Vivamus at sapien id
        sem rhoncus aliquam. Morbi diam dolor, iaculis at sagittis id, tempor in
        magna. Morbi consectetur placerat lacus, ut luctus urna maximus a.
        Maecenas efficitur leo dictum bibendum faucibus. Maecenas dui enim,
        vestibulum eget tristique quis, egestas eu purus. Ut at nisi sed ligula
        euismod mollis vel sed leo. Sed tristique faucibus imperdiet. Curabitur
        id libero viverra, auctor ante lobortis, congue diam. Phasellus vitae
        massa erat.
      </p>
      <p>
        Quisque felis arcu, tempor tincidunt ligula et, feugiat egestas ligula.
        Vivamus non lectus eros. Donec sit amet accumsan nibh, eu pulvinar
        sapien. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Suspendisse ullamcorper vel purus ut
        mattis. Proin gravida aliquam ultrices. Phasellus tempor, est quis
        facilisis varius, lacus tellus maximus tellus, vel egestas nisl elit
        quis tortor. Morbi sed dolor sed ex bibendum elementum. Donec cursus id
        nunc vel tristique. Duis pharetra dolor quis arcu varius maximus.
        Suspendisse non gravida nisi. Mauris auctor elit eget lacinia ultrices.
      </p>
      <Link to='/'>back to home</Link>
    </div>
  );
}

export default AboutUs;
