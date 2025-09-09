import React from 'react';
import { ExternalLink, Download, Code, Target, TrendingUp, Cloud, Thermometer, Calendar } from 'lucide-react';

interface BikeShareBlogCardProps {
  className?: string;
}

export function BikeShareBlogCard({ className = '' }: BikeShareBlogCardProps) {
  return (
    <div className={`bike-share-blog-container ${className}`} style={{
      maxWidth: '900px',
      margin: '0 auto',
      background: '#1a1a1a',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: 1.6
    }}>
      {/* Header Section */}
      <header style={{ padding: '40px 0', borderBottom: '1px solid #2d2d2d' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#2d2d2d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#A5A584',
            marginRight: '20px'
          }}>
            BS
          </div>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              margin: '0 0 8px 0',
              color: '#ffffff'
            }}>
              Bike Share User Behavior Analysis
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#a0a0a0',
              margin: 0
            }}>
              Uncovering Revenue Opportunities Through Data-Driven Insights
            </p>
          </div>
        </div>
        
        <div style={{
          padding: '15px 20px',
          background: '#2d2d2d',
          borderRadius: '8px',
          borderLeft: '4px solid #A5A584'
        }}>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: '#c0c0c0'
          }}>
            2 years of hourly data | 17,520+ data points | Statistical modeling | Business intelligence
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          Introduction
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0',
          marginBottom: '20px'
        }}>
          The bike-sharing industry has experienced tremendous growth, transforming urban mobility and creating new data-driven opportunities for revenue optimization. This comprehensive analysis examines two years of hourly usage data to uncover critical behavioral patterns that can drive strategic business decisions and enhance operational efficiency.
        </p>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0'
        }}>
          Through statistical modeling and advanced analytics, this study reveals how weather conditions, temperature variations, and temporal patterns influence user behavior across casual and registered customer segments.
        </p>
      </section>

      {/* Business Challenge Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          Business Challenge
        </h2>
        <div style={{
          padding: '25px',
          background: '#2d2d2d',
          borderRadius: '8px',
          borderLeft: '4px solid #A5A584'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#ffffff',
            margin: 0,
            fontWeight: '500'
          }}>
            How can bike share operators maximize revenue and improve service delivery by understanding the distinct behavioral patterns between casual and registered users across varying weather conditions and seasonal cycles?
          </p>
        </div>
      </section>

      {/* Research Questions Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '25px',
          color: '#ffffff'
        }}>
          Research Questions
        </h2>
        <div style={{ display: 'grid', gap: '25px' }}>
          {[
            'How do bike rental patterns vary among casual and registered users on weekdays, weekends, and holidays, and what targeted recommendations can be made based on these patterns?',
            'How does the average yearly number of bike rentals for both casual and registered users differ across various weather conditions over time, and how to optimize rentals during these different weather scenarios?',
            'How are biking patterns among casual and registered users related to temperature variations, and what strategies can be implemented to potentially increase rentals during specific temperature ranges?'
          ].map((question, index) => (
            <div key={index} style={{
              padding: '20px',
              background: '#2d2d2d',
              borderRadius: '8px',
              borderLeft: '4px solid #A5A584'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#A5A584',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  minWidth: '24px'
                }}>
                  {index + 1}.
                </span>
                <p style={{
                  fontSize: '15px',
                  color: '#e0e0e0',
                  margin: 0,
                  lineHeight: 1.5
                }}>
                  {question}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analytical Approach Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          Analytical Approach
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0',
          marginBottom: '20px'
        }}>
          This analysis employed a multi-dimensional approach combining statistical modeling, trend analysis, and behavioral segmentation. Using Tableau Public for advanced data visualization, the study examined temporal patterns, weather correlations, and user type behaviors across a comprehensive dataset spanning 2011-2012.
        </p>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0'
        }}>
          The methodology focused on identifying actionable insights through systematic exploration of usage patterns, predictive modeling for demand forecasting, and strategic recommendations for business optimization.
        </p>
      </section>

      {/* Visualization Types Created Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '25px',
          color: '#ffffff'
        }}>
          Visualization Types Created
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          {[
            {
              title: 'Stacked Bar Chart',
              description: 'Ridership patterns across time periods',
              icon: <Calendar className="w-5 h-5" />
            },
            {
              title: 'Multi-Line Chart',
              description: 'Weather conditions impact over 2011-2012',
              icon: <Cloud className="w-5 h-5" />
            },
            {
              title: 'Trend Analysis Chart',
              description: 'Temperature correlation with trend lines',
              icon: <Thermometer className="w-5 h-5" />
            }
          ].map((viz, index) => (
            <div key={index} style={{
              padding: '20px',
              background: '#2d2d2d',
              borderRadius: '8px',
              border: '1px solid #404040'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '10px'
              }}>
                <span style={{ color: '#00d4aa' }}>{viz.icon}</span>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: 0
                }}>
                  {viz.title}
                </h3>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#a0a0a0',
                margin: 0
              }}>
                {viz.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Insights Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '25px',
          color: '#ffffff'
        }}>
          Key Insights
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          {[
            {
              title: 'Temporal Usage Patterns',
              metric: '193 rides',
              description: 'weekday average for registered users',
              details: 'Registered users dominate weekday usage with consistent patterns, while casual users peak during weekends'
            },
            {
              title: 'Weather Impact Analysis',
              metric: '60%',
              description: 'ridership drop in bad weather',
              details: 'Clear and cloudy conditions significantly outperform rainy and snowy weather scenarios'
            },
            {
              title: 'Temperature Sensitivity',
              metric: '6.2 vs 2.5',
              description: 'rides per degree increase',
              details: 'Casual users show 2.5x higher temperature sensitivity compared to registered users'
            },
            {
              title: 'Growth Trajectory',
              metric: '0.17 vs 0.025',
              description: 'annual growth rates',
              details: 'Casual user segment demonstrates substantially higher growth potential year-over-year'
            }
          ].map((insight, index) => (
            <div key={index} style={{
              padding: '25px',
              background: '#2d2d2d',
              borderRadius: '8px',
              borderLeft: '4px solid #A5A584'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '12px'
              }}>
                {insight.title}
              </h3>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#A5A584',
                marginBottom: '6px'
              }}>
                {insight.metric}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#a0a0a0',
                marginBottom: '12px'
              }}>
                {insight.description}
              </div>
              <p style={{
                fontSize: '14px',
                color: '#d0d0d0',
                margin: 0,
                lineHeight: 1.4
              }}>
                {insight.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '25px',
          color: '#ffffff'
        }}>
          Technical Skills
        </h2>
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Core Competencies
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            {['Data Analysis', 'Business Intelligence', 'Data Visualization', 'Strategic Communication'].map((skill, index) => (
              <div key={index} style={{
                padding: '12px 16px',
                background: '#2d2d2d',
                borderRadius: '6px',
                fontSize: '14px',
                color: '#e0e0e0',
                textAlign: 'center'
              }}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Technology Stack
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            {['Tableau Public', 'Statistical Analysis', 'Data Modeling', 'Business Intelligence', 'Executive Reporting'].map((tech, index) => (
              <div key={index} style={{
                padding: '12px 16px',
                background: '#2d2d2d',
                borderRadius: '6px',
                fontSize: '14px',
                color: '#e0e0e0',
                textAlign: 'center',
                border: '1px solid #404040'
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section style={{ padding: '40px 0' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          Conclusion
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0',
          marginBottom: '20px'
        }}>
          This comprehensive analysis successfully identified distinct usage patterns between user types, established weather and temperature correlations, and delivered actionable recommendations for business growth and user engagement optimization. The findings provide strategic insights for loyalty programs, weather-based pricing strategies, and fleet optimization that could increase ridership by 25% and improve operational efficiency across different user segments.
        </p>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0'
        }}>
          The data-driven approach demonstrates the significant impact of environmental factors on user behavior and highlights opportunities for targeted revenue optimization strategies.
        </p>
      </section>

      {/* Project Resources Footer */}
      <footer style={{
        padding: '40px 0',
        borderTop: '1px solid #2d2d2d'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center'
        }}>
          <a
            href="https://public.tableau.com/app/profile/ily.kynion.coulibaly/viz/BikeShare_Case-Ily_Coulibaly/Vizualization3"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: '#A5A584',
              color: '#1a1a1a',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#8a8a6b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#A5A584';
            }}
          >
            <TrendingUp className="w-4 h-4" />
            View Tableau Dashboard
          </a>
          
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'transparent',
              color: '#A5A584',
              border: '1px solid #A5A584',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#A5A584';
              e.currentTarget.style.color = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#A5A584';
            }}
          >
            <Download className="w-4 h-4" />
            Download Full Report
          </button>
          
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'transparent',
              color: '#A5A584',
              border: '1px solid #A5A584',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#A5A584';
              e.currentTarget.style.color = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#A5A584';
            }}
          >
            <Code className="w-4 h-4" />
            View Source Code
          </button>
        </div>
      </footer>
    </div>
  );
}