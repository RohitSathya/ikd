import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Trophy, Target, BarChart, Sparkles, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Swathi",
      position: "Founder & CEO",
      bio: "Digital marketing veteran with 15+ years of experience. Previously led marketing at Fortune 500 companies. Passionate about helping businesses scale through innovative digital strategies.",
      expertise: ["Strategy Development", "Business Growth", "Team Leadership"],
      icon: <Trophy className="w-6 h-6" />,
      image: "https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=G-WWqORA4LBmE3zQf2v9oOQPDEyLBCC1ibUB15PYk_M="
    },
    {
      name: "Ragu",
      position: "Co-founder & CTO",
      bio: "Tech enthusiast turned digital marketing expert. Specializes in marketing automation and data-driven decision making. Pioneer in implementing AI-driven marketing solutions.",
      expertise: ["Marketing Automation", "Technical SEO", "Analytics"],
      icon: <Target className="w-6 h-6" />,
      image: "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwcGVyc29ufGVufDB8fDB8fHww"
    },
    {
      name: "Vikram Singh",
      position: "Head of Analytics",
      bio: "Data science professional specializing in marketing analytics. Expert in turning complex data into actionable insights. Google Analytics and Adobe certified.",
      expertise: ["Data Analysis", "Performance Tracking", "ROI Optimization"],
      icon: <BarChart className="w-6 h-6" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Wh34ZK1_aA03g8QWZeDlDQ5rO9nEB5ZIsg&s"
    },
    {
      name: "Damodaran",
      position: "Creative Director",
      bio: "Award-winning creative director with a passion for brand storytelling. Expertise in visual marketing and campaign development across digital platforms.",
      expertise: ["Brand Strategy", "Content Direction", "Campaign Design"],
      icon: <Sparkles className="w-6 h-6" />,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhMSFhUVFhISFxYVGRgYGBYXFRUXFhcVFxUYHSggGBolHRUXITEhJSkrLi4uGB81ODMtNygtLisBCgoKDg0OGhAQGy0lHR0tNS0rLS0tLS0tLS0tLS8tKy0tLS0tLSstLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xABNEAACAQICBQUIDgcHBQAAAAAAAQIDEQQhBQYSMVEHQWFxkRMiUnKBk9PwFBUyQlOCkqGxsrO0wdEXIzM0YnPSFiVDVHSi4SQ1g8Px/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREBAAIBBAICAwADAAAAAAAAAAECEQMSIVETMQQiMkGBBRQz/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAcl115ScbhMdXw9KGFdOk6ai6kKkpPao06ju41Ut83zbrHWj5s5Vr+2+Ms/fUPutArbOOFqYzyzv6X9JfB4LzVX04/S/pL4PBeaq+nObXlxZW74lPs0+vTpH6YNJfB4LzVX057jyuaS+DwXm6vpzmqi+LLkIPiyeUfXp0unys6Rf+HgvN1fTEmjyn6Re+ng/N1fTHMYJrnZdjKXhMrO5P16dShykY9/4eE+RU9KTqWv2MfvMN8ip6Q5HCpPwpFyNeovfy7SPt2fXp2Klrti3vhh/kz9IS4624nwaHyZ/wBZxaGKq+HLtLyx1b4SfaRi/Z9enZ/7VYjwaPyZf1lFrXifBo/Jl/WcbWkK3wk+0qtI1vhJ9oxfszXp2WOtVfwaPyZf1lyOs9fwaXZL+o4q9IVr/tJ9p6Wkqy3VZ9oxfszXp9J4Wo5QjJ73GLduLVy6QNAybw1BvNujRbfxIk86GIAAAAAAAAAAAAAAAAAAAAAAAAAAB88cp+Bk9K4uXM5UPmw1FfgfQ5wzlGh/eOIfTR+wpGepMxDTTjMtBeBfFFFg3xMrOBRUzLfLbZDHLBviK9JQjtSl0W5zJowGnKzlV2Fd7KSsuLSfbmi9ZmZUvERC3LHb7WXTz7/mPNfEySyqZqzyV1Z353mn0WIV3ayUk3k+nmsuKLscBUfvZrgtmTb6jaMMeZTqOkNmF33zvzPJLg8sn09KJ+idIUak1CptU3JpJ5ON3kk3vXXuMFSwFZu0YVL9TJdTVzEpXlRklbhxK22rRFnR6OqsHvkyZT1TpeEyJqTrCsTHuc1s1aaSavfaSSW1nz33/wDJttjlta0ThtFYlgv7LUUUeq9EzoRXfK2yGu1dU6T99JFmep0eao+w2dvMrKY32Rshv2h6ezQox8GlSj2QSJhHwH7On4kPqokHbDlAASAAAAAAAAAAAAAAAAAAAAAAAABxPlChfSGIu7Z0vsKZ2w+feUxv20xWb91Q+7UTPUjML6c4lBnTtuZ42F0GKTfFlVfizLY28jKqC6DSas9rESzedSWfxmjYs+LMDgcLt4lQb91Uav5d5aIxEypa27h0nQegqcYJ5NtJp2M6sMn72N9za5zD0NI0sLTinGc0rRjFb5W3tvmLOI10u9lYedO+5v8AOxz6czPLrnFeGwUsKk7qJcxVbZVmjEU9PS2G7JNK9r8/WYqprTUlJxVCU0t8luXl5zWcz6N0R7a3jqzwukoypKylKPe5K6qd7JcFm7rpSOt+yI291HtOS61uFR06quu+UXxtvs+lZolZ8X2k7d0RLmtbbacOney4c8l2j2RF++j2nMc+LK58X2keI8jp0cTDwo9p7jiqfhR7Uctd+L7SjT4sjxHkfS2Ad6VPxIfVRIMfq/8AuuH/AJNH7OJkDrhzgAAAAAAAAAAAAAAAAAAAAAAAAAAHC+UXR+1pLEyvvdHLqw9Jfgd0ON6+v/r69+NL7GmZ6s4hppRmWl+168JlVgF4TMh3NbzxtdBjulvshF9gQV222knJrddJXtfpPGC0dSdejUhCUL7TlFttOVm1KLedmn0k+pTcouO66a7VYmKlUjUbqQ71uCpSvdKmqc9pJc2dk+pFLWsvWlcLulNBurTvGo4vgks1wve6Na9pJRjOLjnKSkpy2m42vlB3tZ36b5G9YTEKNrpPrLGldLxi4q7jFtbUoK7jG13ZccreUrp2xGGlqRPtDo6syeAcpNqpJ7t1ldK3Y0zX8PqrOMntbSulG8ZSSVrd8s97t87N2wutuDqUpWqPYSfuspLNPNPMtaP01FvZTk4SSlCUlZuL4/mWrMxBNYlr2P0Sr01KO3syv32W09iVtq38Vn02MzhdWKUoRk7ptJuzyu1dkPW3GqnT7pZ2jJStF2bs07J9RmNVtIzxGGhVnTUHLaSSd1sxeyn5bCJtjLK8VzhajqtRW+78p6jq3Q4PtMzJeQ9RRG+VdsMLLVihbdLtLMtVqP8AGZ1t33FxMbpNkN80TT2aFKK3KnTS8kUiWR8B+zp+JD6qJB2w5AAEgAAAAAAAAAAAAAAAAAAAAAAAAca1+nH2fiE2r3pfY0zspwHlK/7piuuj92omepGYX07YlGjOK50U248UYQqjLY28jN7cfCRI0hpFSg3ZbMIxTattSlZptvhkjXbF2nh3KFRrNRjeXVf6d78hE1xyReZ4T8LpV+5k87ZfQYLG6WrTqtQbileOS2mua+RAni3Hn6b/AIdZf0DXvOTldbTvdc3rYVpjMrTfOISMPq53TP8AXX5lGMc/K5ZHuOKrYepGE+6KHvVUS7133Ra5jJrDXqX9mVo097jHJ9KIWtWMoyhGNNylsu+1LfuyV+wv74LTERmEzTeIddRoqUU21eUty522vW5vOA0rhaVOEITiowjGEV0RVl9BzDRz23tcyVutuxk0iNnGFJ1Mzl0CWncPf3aKPTlD4SJoDQ2UV8UHklv0NO0FvqILT2H+ERoLRXZJ8UI8kvo7Rs1KjTa3OnBrqcUSSBoD91ofyaP2cSedLAAAAAAAAAAAAAAAAAAAAAAAAAAAA4lyhYKL0hiJO926P2FJfgdtOOa+xbx9frpfY0zPVnENdKMy1VaOhwYWBhwJbuiPVxcY/wDGZnSl7/jGWltlfaFjoRpwbSvLOyf0voJuoujq9XC4jFVcobSpRiopLZjfbnbnScoryTMXi6m3eTyXMug6NyW6SjUw08O0r0nLJ++p1W3u63JPycT0v9PGl9vcuO2v98x6ch0xgpUpyWy2u219z6ukg4TFOmnbc/I1/wDTq2u2rPcltxu6V8n76lf3snzx4Pt4vSamioy326930fkefMTpzizrxF4zVr88VN89rtsrT2qjUI73l287ZmvaaPDsZkMNhIYeLqO3epy3eCrrr3CL54g8U+5bjgdXaFOnGGzeySbe9u2bJy0NQ8BFyGNpylsbUVJxjUUb52kt64q918Vk+MMszK8WpOJWrtmMwxi0NR8BFfaWh4CMg10FY9JTdKdsIK0NQ8BHqOh6HwaJjkj0hulO2G+6NilSppblCCXkiiSR8A/1VPxIfVRIO2HGAAkAAAAAAAAAAAAAAAAAAAAAAAADi2v2Ia0hiErb6Wb/AJFPmO0nDOUOtbSWJy+C+wpHT8XSpqXxeMwpqXtWM1a9UqybaciJt5Pce6de7eXOWZbnlx+g9ata1jFYcszMzypRbtzGR1X0r7ExUKrl3l9ip4k8m/I0pfF6TBPEqDtKE7eEk5LN89txSrU2r2Xr0mczExhOJfRdempxaaUoyVmt6afN0nL9ZdWamEk50lt0G9zzdJ+DJ+DwfkfTmdUNcoLBQhNTnWpfqtlLeorvJOTyS2bLj3rMdpnSeOqyUnN04Jp7FNtK3Cb9/wBN8ug47/GnUrjDTS1p07MLgsDVqPa2YpLne7sSzIuncBUVJzknaU6dKN/45pXSN70FjoTThZRlHO1krrqWV+oh62UduFGKa/bQm29yUFKV32HkzpXrqxWYep5K205tDVdcqbjDBSjnenVpbXHuTg0v98n5C1orWuvTsttzjwn33Y9/zlNK6WlX2sNUg6caWzVwrlk5bEWqsJSvZynFuSXM4pGDjHnR7k6dbcWh5UWmvMOhYbW+nL3UHF9d0Sv7SUrbpHPKdTpt+BcWKcXv8j3HJq/4+kxmnDevybftvktZKfgyK1NZqdsoyNPwmK7pklnwXr62JEqUre5l2HnX0dk4l0V1ZtGYfQOiJ7VClLjTpvtgmSyBoFf9NQ/k0fqRJ5uxAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8pTftniuuj93onfmfP/AClK+lMV41D7tROv4X/T+Mtb01rCxbv1l1wdvXqPeHgowd2W1NWPUjhzvFVtJJ8PW3rzkWcXfJZMmYmfeK29Wa7NxaVTaRE4GV1IqKGLjCbtGt+rb4S3w39OXxjpeI0Y43y2l1Z9hxrulmpJ99FqSfCUXdPtsd/0Lj1iMPSrLdOEZdTazXkeRla809ekTDT9IYPuce6KOdNqTyzcOf5rtdRYp6DxNZrEQfuKtSMVdOLjByhKMk+Z9+je8XhlJXyy33WTXOmY7RNPZjFQb7nsRst+03ntPtsjK0xe0WxzC0XmKzXtidatWaM8FXjGHf8Ac3JNtuzjnl2HHtH1Nqmr77JX6Vl+B9F1Ke1Fxfvk49qsfPFWg6VWtT3bNSWXQ2WpMzPJX0kKKvfmZaxcTzGW49V5Pn5voNJ9CPozSPcMRTq80GnJcUmtpfJudqUItJpKzV0+Ke5nCMQ++Xl+hnUuTzSyr4VU3Lv6HeNfwf4b6rXXxTyfnU4izt+NbnDsuj/2VPxIfVRII2j/ANlT8SH1USTKEAAJAAAAAAAAAAAAAAAAAAAAAAAAA4ByiW9tcX41D7tRO/nzzylVLaVxnjUPutE6vhzi/wDGer+LBVay2bL13FlSVizC1i93TvckejnLnepyVizulbmea/Euupl68Dxi1dKyzW4mR4mkn1nU+SbSW1QqUHvpS2o+LO7+tt9qOWbaccjYeTzSTpY2nfKNROjL41nF/KSXlZneMwO0Yld7Lqf0EDRTvRpfy4fVRPcjH6KX6vZ8GVSHkjUkl81jKvpRkYHEdeML3PSFXmU7SXbY7dCBzXlW0clVhWzu+9fVb8yafktDRKayXWR9JVWrK+5Z9RfpPJ24kDHvvs+ZGtp4Wj2g1557zOaj4yVDETnDdKlJNPipRa/H5zW8WXsFpPudna7jfs4HBq4tExLopmMTD680JO+HoPjSpPtgiaY7V2V8Jh3xoUX204mROVcAAAAAAAAAAAAAAAAAAAAAAAAAAA+dOUyX97YzxqH3WifRZ84cp07aYxnjYf7rROj40/dTU9NfpSy7fwHdMt3rctxqu3rwLU6jsehnhhEJU61kj26rdsiDG7sSpXyJixhZo1LTcXz98vxX49pdU5RknF2aaknwad0+1EPHxe0pLes15CVGW3FSW7eRE/ofQGhscq9CnVXv4xlbg2s15HdeQ84KVqtWH8UKi6pxs1205dpqnJRpDboTot5053Xiz75f7lM22rFKtF291CUX1xakvmcjOYxMs/2yK3ml8qFG9FSt7nP5pfmblB5mrcpcb4Vvof8AxvI0/wAkuPUc1Ix+MffX6kZPDJ2flMTjGryNLzwvX2xuJi3ayLlWjJQs0t3l3cSbo+mndvjb17SmMja6Xr+Z5WpfN5evT4seKLy+r9V/3PDf6eh9nEyZjNWP3PDf6eh9nEyZVxAAAAAAAAAAAAAAAAAAAAAAAAAAAGraX5PtHYqvPEVqMpVamztSVWtG+zGMF3sZpLKKW7mAJiZj0In6LNE/5efn8R6Qp+ivRP8Al5+fxHpACfJfuUYh6jyW6KW7Dz8/iPSFXyYaK/y8/PV/SADyX7k2w8y5LdFPfh5+fxHpBT5LNExVlh5pfz8R6QoB5L9m2GR0LqNgcJNzoUpRlJbLvVqyur33Tm0ZaeiqTabi7xd1nLfZx48GyoG+3aNsdPa0fT4fO/zIulNX8PiIdzrQcovmUpx+eLTAG+3ZtjphKXJpoyO6hPz1d/8AsI8uSjRD34afn8R6QqCZ1LT+5TthWnyVaJjuw81/5q/pCk+SnRL34efn6/pCoM8NPJfGM8NvwmHjThCnBWjCMYRV27RikkrvN5IvAEqAAAAAAAAAAAAAD//Z"
    },
    {
      name: "AjaySeth",
      position: "Social Media Strategist",
      bio: "Social media expert with experience managing global brand accounts. Specializes in community building and viral marketing campaigns.",
      expertise: ["Social Strategy", "Community Management", "Influencer Relations"],
      icon: <Users className="w-6 h-6" />,
      image: "data:image/jpeg;base64,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"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of digital marketing specialists brings together years of experience 
            and expertise to deliver exceptional results for your business.
          </p>
        </div>

        {/* Team Slider */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>

            {/* Team Member Cards */}
            {[-1, 0, 1].map((offset) => {
              const index = (currentSlide + offset + teamMembers.length) % teamMembers.length;
              const member = teamMembers[index];
              return (
                <Card 
                  key={index}
                  className={`transform transition-all duration-500 ${
                    offset === 0 
                      ? 'scale-100 opacity-100 z-20' 
                      : 'scale-90 opacity-60 z-10'
                  } bg-white/80 backdrop-blur-sm shadow-xl w-full max-w-sm`}
                >
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                          {member.icon}
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                      <p className="text-gray-600 mb-6">{member.bio}</p>

                      <div className="space-y-3">
                        {member.expertise.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="inline-block px-4 py-1 m-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center space-x-4 mt-6">
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Mail className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <button 
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === idx ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;