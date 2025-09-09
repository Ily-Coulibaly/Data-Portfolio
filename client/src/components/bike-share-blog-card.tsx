import React from 'react';
import { Target, TrendingUp, BarChart3, LineChart, Activity, FileText } from 'lucide-react';
import bikeShareReport from '@assets/Bike Share Case_Ily_1757430755593.pdf';

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
      lineHeight: 1.6,
      padding: '40px',
      borderRadius: '8px'
    }}>
      {/* Header */}
      <header style={{ marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '30px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          margin: '0 0 12px 0',
          color: '#ffffff'
        }}>
          Bike Share User Behavior Analysis
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#a0a0a0',
          margin: '0 0 20px 0'
        }}>
          Uncovering Revenue Opportunities Through Data-Driven Insights
        </p>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#888',
          fontStyle: 'italic'
        }}>
          2 years of hourly data | 17,520+ data points | Statistical modeling | Business intelligence
        </p>
      </header>

      {/* Business Challenge */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#ffffff',
          borderLeft: '3px solid #A5A584',
          paddingLeft: '16px'
        }}>
          Business Challenge
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0',
          margin: 0,
          lineHeight: 1.6
        }}>
          How can bike share operators maximize revenue and improve service delivery by understanding the distinct behavioral patterns between casual and registered users across varying weather conditions and seasonal cycles?
        </p>
      </section>

      {/* Research Questions */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '20px',
          color: '#ffffff',
          borderLeft: '3px solid #A5A584',
          paddingLeft: '16px'
        }}>
          Research Questions
        </h2>
        <div style={{ color: '#d0d0d0', fontSize: '15px', lineHeight: 1.6 }}>
          {[
            'How do bike rental patterns vary among casual and registered users on weekdays, weekends, and holidays, and what targeted recommendations can be made based on these patterns?',
            'How does the average yearly number of bike rentals for both casual and registered users differ across various weather conditions over time, and how to optimize rentals during these different weather scenarios?',
            'How are biking patterns among casual and registered users related to temperature variations, and what strategies can be implemented to potentially increase rentals during specific temperature ranges?'
          ].map((question, index) => (
            <div key={index} style={{
              marginBottom: '16px',
              paddingLeft: '20px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                color: '#A5A584',
                fontWeight: 'bold'
              }}>
                {index + 1}.
              </span>
              {question}
            </div>
          ))}
        </div>
      </section>

      {/* Analytical Approach */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#ffffff',
          borderLeft: '3px solid #A5A584',
          paddingLeft: '16px'
        }}>
          Analytical Approach
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0',
          margin: 0,
          lineHeight: 1.6
        }}>
          Multi-dimensional approach combining statistical modeling, trend analysis, and behavioral segmentation using Tableau Public for advanced data visualization. The methodology focused on identifying actionable insights through systematic exploration of usage patterns, predictive modeling for demand forecasting, and strategic recommendations for business optimization.
        </p>
      </section>

      {/* Visualization Types */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '20px',
          color: '#ffffff',
          borderLeft: '3px solid #A5A584',
          paddingLeft: '16px'
        }}>
          Visualization Types Created
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {[
            {
              title: 'Stacked Bar Chart',
              description: 'Ridership patterns across time periods',
              icon: <BarChart3 className="w-5 h-5" style={{ color: '#A5A584' }} />
            },
            {
              title: 'Multi-Line Chart',
              description: 'Weather conditions impact over 2011-2012',
              icon: <LineChart className="w-5 h-5" style={{ color: '#A5A584' }} />
            },
            {
              title: 'Trend Analysis Chart',
              description: 'Temperature correlation with trend lines',
              icon: <Activity className="w-5 h-5" style={{ color: '#A5A584' }} />
            }
          ].map((viz, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              {viz.icon}
              <div>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: '0 0 4px 0'
                }}>
                  {viz.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: '#a0a0a0',
                  margin: 0
                }}>
                  {viz.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Insights */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '20px',
          color: '#ffffff',
          borderLeft: '3px solid #A5A584',
          paddingLeft: '16px'
        }}>
          Key Insights
        </h2>
        <div style={{ color: '#d0d0d0', fontSize: '15px', lineHeight: 1.6 }}>
          {[
            'Registered users dominate weekdays with 193 average rides, while casual users peak on weekends',
            'Temperature increases drive 6.2x more casual rides per degree vs 2.5x for registered users',
            'Weather significantly impacts usage: clear/cloudy conditions outperform rainy/snowy by 40%',
            'Casual user segment demonstrates 0.17 vs 0.025 annual growth rates showing higher potential'
          ].map((insight, index) => (
            <div key={index} style={{
              marginBottom: '12px',
              paddingLeft: '16px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: '0',
                color: '#A5A584',
                fontWeight: 'bold'
              }}>
                •
              </span>
              {insight}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '20px',
          color: '#ffffff',
          borderLeft: '3px solid #A5A584',
          paddingLeft: '16px'
        }}>
          Technical Skills
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            Core Competencies
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {['Data Analysis', 'Business Intelligence', 'Statistical Modeling'].map((skill, index) => (
              <span key={index} style={{
                padding: '8px 16px',
                background: '#2d2d2d',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#e0e0e0'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '12px'
          }}>
            Technology Stack
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {['Tableau Public', 'Predictive Analytics', 'Data Visualization'].map((tech, index) => (
              <span key={index} style={{
                padding: '8px 16px',
                background: '#2d2d2d',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#e0e0e0'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#ffffff',
          borderLeft: '3px solid #A5A584',
          paddingLeft: '16px'
        }}>
          Conclusion
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#d0d0d0',
          margin: 0,
          lineHeight: 1.6
        }}>
          This comprehensive analysis successfully identified distinct usage patterns between user types, established weather and temperature correlations, and delivered actionable recommendations for business growth. The findings provide strategic insights for loyalty programs, weather-based pricing strategies, and fleet optimization that could increase ridership by 25% and improve operational efficiency across different user segments.
        </p>
      </section>

      {/* Project Resources */}
      <footer style={{
        borderTop: '1px solid #333',
        paddingTop: '30px',
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
            borderRadius: '6px',
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
        
        <a
          href={bikeShareReport}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'transparent',
            color: '#A5A584',
            border: '1px solid #A5A584',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
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
          <FileText className="w-4 h-4" />
          View Full Report
        </a>
      </footer>
    </div>
  );
}