import React from "react";
import "./introduce.css"; // CSS 파일 추가
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/"); // 홈 버튼 클릭 시 메인 페이지로 이동
  };
  return (
    <>
      <div className="container">
        <div>
          <div>
            <div>
              <h1>Japanese Numbers charts</h1>
            </div>
          </div>
          <div>
            <div className="direct-container" >
              <a className="direct" href="#1~10" data-rb-event-key="#110">
                1~10
              </a>
              <a className="direct" href="#11~20" data-rb-event-key="#1120">
                11~20
              </a>
              <a className="direct" href="#21~30" data-rb-event-key="#2130">
                21~30
              </a>
              <a className='direct' href="#31~40" data-rb-event-key="#3140">
                31~40
              </a>
              <a className='direct' href="#41~50" data-rb-event-key="#4150">
                41~50
              </a>
              <a className='direct' href="#51~60" data-rb-event-key="#5160">
                51~60
              </a>
              <a className='direct' href="#61~70" data-rb-event-key="#6170">
                61~70
              </a>
              <a className='direct' href="#71~80" data-rb-event-key="#7180">
                71~80
              </a>
              <a className='direct' href="#81~90" data-rb-event-key="#8190">
                81~90
              </a>
              <a className='direct' href="#91~100" data-rb-event-key="#91100">
                91~100
              </a>
            </div>
          </div>

          <section className="number-section" id="number-110">
            <div className="row">
              <div>
                <h2 className="number-title">1~10</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>いち</div>
                    <p>1</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>に</div>
                    <p>2</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さん</div>
                    <p>3</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>し</div>
                    <p>4</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ご</div>
                    <p>5</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろく</div>
                    <p>6</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>しち</div>
                    <p>7</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はち</div>
                    <p>8</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅう</div>
                    <p>9</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅう</div>
                    <p>10</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section  className="number-section" id="number-1120">
            <div className="row">
              <div>
                <h2 className="number-title">11~20</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅういち</div>
                    <p>11</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅうに</div>
                    <p>12</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅうさん</div>
                    <p>13</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅうし</div>
                    <p>14</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅうご</div>
                    <p>15</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅうろく</div>
                    <p>16</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅうしち</div>
                    <p>17</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅうはち</div>
                    <p>18</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>じゅうきゅう</div>
                    <p>19</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅう</div>
                    <p>20</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section  className="number-section" id="number-2130">
            <div className="row">
              <div>
                <h2 className="number-title">21~30</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅういち</div>
                    <p>21</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅうに</div>
                    <p>22</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅうさん</div>
                    <p>23</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅうし</div>
                    <p>24</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅうご</div>
                    <p>25</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅうろく</div>
                    <p>26</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅうしち</div>
                    <p>27</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅうはち</div>
                    <p>28</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>にじゅうきゅう</div>
                    <p>29</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅう</div>
                    <p>30</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="number-section"  id="number-3140">
            <div className="row">
              <div>
                <h2 className="number-title">31~40</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅういち</div>
                    <p>31</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅうに</div>
                    <p>32</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅうさん</div>
                    <p>33</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅうし</div>
                    <p>34</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅうご</div>
                    <p>35</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅうろく</div>
                    <p>36</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅうしち</div>
                    <p>37</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅうはち</div>
                    <p>38</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>さんじゅうきゅう</div>
                    <p>39</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅう</div>
                    <p>40</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="number-section"  id="number-4150">
            <div className="row">
              <div>
                <h2 className="number-title">41~50</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅういち</div>
                    <p>41</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅうに</div>
                    <p>42</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅうさん</div>
                    <p>43</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅうし</div>
                    <p>44</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅうご</div>
                    <p>45</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅうろく</div>
                    <p>46</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅうしち</div>
                    <p>47</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅうはち</div>
                    <p>48</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>よんじゅうきゅう</div>
                    <p>49</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅう</div>
                    <p>50</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="number-section"  id="number-5160">
            <div className="row">
              <div>
                <h2 className="number-title">51~60</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅういち</div>
                    <p>51</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅうに</div>
                    <p>52</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅうさん</div>
                    <p>53</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅうし</div>
                    <p>54</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅうご</div>
                    <p>55</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅうろく</div>
                    <p>56</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅうしち</div>
                    <p>57</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅうはち</div>
                    <p>58</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ごじゅうきゅう</div>
                    <p>59</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅう</div>
                    <p>60</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="number-section"  id="number-6170">
            <div className="row">
              <div>
                <h2 className="number-title">61~70</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅういち</div>
                    <p>61</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅうに</div>
                    <p>62</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅうさん</div>
                    <p>63</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅうし</div>
                    <p>64</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅうご</div>
                    <p>65</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅうろく</div>
                    <p>66</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅうしち</div>
                    <p>67</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅうはち</div>
                    <p>68</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ろくじゅうきゅう</div>
                    <p>69</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅう</div>
                    <p>70</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="number-section"  id="number-7180">
            <div className="row">
              <div>
                <h2 className="number-title">71~80</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅういち</div>
                    <p>71</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅうに</div>
                    <p>72</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅうさん</div>
                    <p>73</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅうし</div>
                    <p>74</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅうご</div>
                    <p>75</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅうろく</div>
                    <p>76</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅうしち</div>
                    <p>77</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅうはち</div>
                    <p>78</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ななじゅうきゅう</div>
                    <p>79</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅう</div>
                    <p>80</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="number-section"  id="number-8190">
            <div className="row">
              <div>
                <h2 className="number-title">81~90</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅういち</div>
                    <p>81</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅうに</div>
                    <p>82</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅうさん</div>
                    <p>83</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅうし</div>
                    <p>84</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅうご</div>
                    <p>85</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅうろく</div>
                    <p>86</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅうしち</div>
                    <p>87</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅうはち</div>
                    <p>88</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>はちじゅうきゅう</div>
                    <p>89</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅう</div>
                    <p>90</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="number-section"  id="number-91100">
            <div className="row">
              <div>
                <h2 className="number-title">91~100</h2>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅういち</div>
                    <p>91</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅうに</div>
                    <p>92</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅうさん</div>
                    <p>93</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅうし</div>
                    <p>94</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅうご</div>
                    <p>95</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅうろく</div>
                    <p>96</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅうしち</div>
                    <p>97</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅうはち</div>
                    <p>98</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>きゅうじゅうきゅう</div>
                    <p>99</p>
                  </div>
                </div>
              </div>
              <div className="number-card">
                <div>
                  <div>
                    <div>ひゃく</div>
                    <p>100</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <button onClick={handleHome} className="home">
        Home
      </button>
    </>
  );
};

export default Introduce;
